import sys
import requests
from bs4 import BeautifulSoup
import re
from shadow_useragent import ShadowUserAgent
import clipboard as cp
import json
import pprint

pp = pprint.PrettyPrinter(indent=4)


class BookScraper:
    def __init__(self, url):
        self.url = url

    def beautify(self, url):
        shadow_useragent = ShadowUserAgent()
        headers = {
            'authority': 'www.amazon.de',
            'pragma': 'no-cache',
            'cache-control': 'no-cache',
            'dnt': '1',
            'upgrade-insecure-requests': '1',
            'user-agent': shadow_useragent.random_nomobile,
            'accept': 'text/html',
            'sec-fetch-site': 'none',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-dest': 'document',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        }
        request = requests.get(url, headers=headers)
        return BeautifulSoup(request.text, "html.parser")

    def scrape(self):
        soup = self.beautify(self.url)
        page_count = self.scrape_page_count(soup)
        published = self.scrape_publish_year(soup)
        authors = self.scrape_author_name(soup)
        cover = self.scrape_cover(soup)
        title = self.scrape_title(soup)
        isbn = self.scrape_isbn(soup)

        book_dict = {
            "title": title,
            "authors": authors,
            "published": published,
            "cover": cover,
            "pages": int(page_count),
            "isbn": isbn,
            "year_read": "",
            "order": 0,
            "link": self.url
        }
        pp.pprint(book_dict)
        cp.copy(json.dumps(book_dict))

    def scrape_page_count(self, soup):
        try:
            text = soup.find("span", itemprop="numberOfPages").get_text()
        except AttributeError:
            return "1000000"
        return re.findall(r'\d+', text)[0]

    def scrape_publish_year(self, soup):
        try:
            text = soup.find("div", {"id": "details"}).findAll(
                "nobr", {"class": "greyText"})[0].get_text()
            return re.findall(r'(\d{4})', text)[0]
        except AttributeError:
            return "unknown year"

    def scrape_author_name(self, soup):
        authors = []
        for author in soup.findAll("a", {"class": "authorName"}):
            authors.append({"name": author.get_text()})
        try:
            return authors
        except AttributeError:
            return "unknown author"

    def scrape_cover(self, soup):
        try:
            return soup.find("img", {"id": "coverImage"})['src']
        except AttributeError:
            return "wrong cover"

    def scrape_title(self, soup):
        try:
            text = soup.find("h1", {"id": "bookTitle"}).get_text()
            return re.compile(r'[\n\r\t]').sub(" ", text).strip()
        except AttributeError:
            return "unknown title"

    def scrape_isbn(self, soup):
        try:
            return soup.find("div", itemprop="isbn").get_text()
        except AttributeError:
            return "no isbn found"


def run():
    if ".csv" in sys.argv[1]:
        print("YEEEES")
    else:
        scraper = BookScraper(sys.argv[1])
        scraper.scrape()


if __name__ == '__main__':
    run()
