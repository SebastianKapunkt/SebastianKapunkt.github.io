import sys
import requests
from bs4 import BeautifulSoup
import re
# from shadow_useragent import ShadowUserAgent
import clipboard as cp
import json
import pprint
import csv

pp = pprint.PrettyPrinter(indent=4)


class BookScraper:
    """Scrapes books from url or csv list (Goodreads).

        expected format (item separator: ',' | line separator: new line):
        Title, Year Read, Goodreads Url
        Die kleine Hexe,1997,https://www.goodreads.com/book/show/1148052.Die_kleine_Hexe
    """

    def __init__(self, url, year_read=""):
        self.url = url
        self.year_read = year_read
        self.book_list_path = "../js/books.js"

    def beautify(self, url):
        # shadow_useragent = ShadowUserAgent()
        # headers = {
        #     'authority': 'www.amazon.de',
        #     'pragma': 'no-cache',
        #     'cache-control': 'no-cache',
        #     'dnt': '1',
        #     'upgrade-insecure-requests': '1',
        #     'user-agent': shadow_useragent.chrome ,
        #     'accept': 'text/html',
        #     'sec-fetch-site': 'none',
        #     'sec-fetch-mode': 'navigate',
        #     'sec-fetch-dest': 'document',
        #     'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        # }
        # request = requests.get(url, headers=headers)
        request = requests.get(url)
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
            "year_read": f"{self.year_read}",
            "order": 0,
            "link": self.url,
        }
        self.add_entry(book_dict)
        print(f"{title} - {self.year_read}")

    def scrape_page_count(self, soup):
        try:
            text = soup.select('p[data-testid="pagesFormat"]')[0]
            return re.findall(r'\d+', str(text))[0]
        except AttributeError:
            return "1000000"

    def scrape_publish_year(self, soup):
        try:
            text = soup.select('p[data-testid="publicationInfo"]')[0]
            return re.findall(r'(\d{4})', str(text))[0]
        except (AttributeError, IndexError):
            return "unknown year"

    def scrape_author_name(self, soup):
        try:
            authors = []
            wrapper = soup.select('.BookPageMetadataSection__contributor')[0]
            for author in wrapper.select('span[data-testid="name"]'):
                authors.append({"name": author.get_text()})
            return authors
        except AttributeError:
            return "unknown author"

    def scrape_cover(self, soup):
        try:
            wrapper = soup.select('.BookCover__image')[0]
            return wrapper.select('.ResponsiveImage')[0]['src']
        except AttributeError:
            return "wrong cover"

    def scrape_title(self, soup):
        try:
            text = soup.select('h1[data-testid="bookTitle"]')[0].get_text()
            return re.compile(r'[\n\r\t]').sub(" ", text).strip()
        except AttributeError:
            return "unknown title"

    def scrape_isbn(self, soup):
        try:
            metaData = json.loads(soup.find('script', type='application/ld+json').contents[0])
            return metaData['isbn']
        except (AttributeError, KeyError):
            return "no isbn found"

    def add_entry(self, entry):
        # if not self.year_read:
        cp.copy(json.dumps(entry))
        # else:
        #     with open(self.book_list_path) as json_file:
        #         json_file_content = json.load(json_file)
        #     json_file_content.append(entry)
        #     with open(self.book_list_path, mode='w') as json_file:
        #         json_file.write(json.dumps(json_file_content, indent=2))


def run():
    scraper = BookScraper(sys.argv[1])
    # if ".csv" in sys.argv[1]:
    #     with open(sys.argv[1], newline='') as csvfile:
    #         reader = csv.reader(csvfile, delimiter=',')
    #         for row in reader:
    #             if "www.goodreads.com" in row[2]:
    #                 scraper.url = row[2]
    #                 scraper.year_read = row[1]
    #                 scraper.scrape()
    # else:
    if (len(sys.argv) > 2):
        scraper = BookScraper(sys.argv[1], sys.argv[2])
    scraper.scrape()


if __name__ == '__main__':
    run()
