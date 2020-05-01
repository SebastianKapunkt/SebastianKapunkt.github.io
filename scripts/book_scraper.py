import sys
import requests
from bs4 import BeautifulSoup
import re
from shadow_useragent import ShadowUserAgent
import clipboard as cp
import json

class BookScraper:
    def __init__(self, url):
        self.assets_folder = 'assets'
        self.teaser_file = 'book.json'
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
        print(page_count)
        published = self.scrape_publish_year(soup)
        print(published)
        author = self.scrape_author_name(soup)
        print(author)
        cover = self.scrape_cover(soup)
        print(cover)
        title = self.scrape_title(soup)
        print(title)
        
        book_dict = {
            "title": title,
            "authors": [{
                "name": author,
            }],
            "published": published,
            "cover": cover,
            "pages": int(page_count),
            "year_read": "",
            "order": 0
        }
        print(book_dict)
        cp.copy(json.dumps(book_dict))

    def scrape_page_count(self, soup):
        try:
            text = soup.find(text="Seitenzahl der Print-Ausgabe:").parent.parent.get_text()
        except AttributeError:
            try:
                text = soup.find(text="Taschenbuch:").parent.parent.get_text()
            except AttributeError:
                return "1000000"
        return re.findall(r'\d+', text)[0]

    def scrape_publish_year(self, soup):
        try:
            text = soup.find(text="Verlag:").parent.parent.get_text()
            return re.findall(r'(\d{4})', text)[0]
        except AttributeError:
            return "unknown year"

    def scrape_author_name(self, soup):
        try:
            text = soup.find("a", {"class":"authorNameLink"}).get_text()
            return re.compile(r'[\n\r\t]').sub(" ", text).strip()
        except AttributeError:
            return "unknown author"

    def scrape_cover(self, soup):
        try:
            return soup.find("div", {"id":"ebooks-img-canvas"}).find("img")["src"]
        except AttributeError:
            try:
                return soup.find("div", {"id":"img-canvas"}).find("img")["src"]
            except AttributeError:
                return "wrong cover"

    def scrape_title(self, soup):
        try:
            text = soup.find("span", {"id":"productTitle"}).get_text()
            return re.compile(r'[\n\r\t]').sub(" ", text).strip()
        except AttributeError:
            return "unknown title"

def run():
    scraper = BookScraper(sys.argv[1])
    scraper.scrape()
   
if __name__ == '__main__':
    run()