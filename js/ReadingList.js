class ReadingList extends HTMLElement {

  connectedCallback() {
    this.currentYear = this.getAttribute("startYear")
    this.innerHTML = this.render()
    this.addYearClick()
  }

  groupedBooks = groupBooksByAttribute(books_read, "year_read")

  render() {
    return `
      <div class="year-grid">
       <div class="year-column-item" data-year="all">
          <div class="year ${"all" === this.currentYear ? "year_active" : ""}">
            Alle
          </div>
        </div>
        ${Object.keys(this.groupedBooks).sort((a, b) => a < b ? 1 : -1).map((key) =>
            this.getYearSelect(key)
        ).join("")}
      </div>
      <div class="book-grid">
        ${this.getBooks()}
      </div>
    `
  }

  getYearSelect(year) {
    return `
      <bu class="year-column-item" data-year="${year}">
        <div class="year ${year === this.currentYear ? "year_active" : ""}">
          ${ year === "2014" ? "2014 & Davor" : year }
        </div>
        <div class="year_content">
          ${sumPages(this.groupedBooks[year])} Seiten |
          ${this.groupedBooks[year].length} 
          ${this.groupedBooks[year].length === 1 ? "Buch" : "Bücher"}
        </div>
      </bu>
    `
  }

  getBooks() {
    let filteredBooks
    if (this.currentYear === "all") {
      filteredBooks = books_read
    } else {
      filteredBooks = books_read.filter(book => `${book.year_read}` === this.currentYear)
    }
    filteredBooks.sort(
      (a, b) => {
        if (a.year_read < b.year_read) {
          return 1
        } else if (a.year_read > b.year_read) {
          return -1
        } else {
          return a.title < b.title ? -1 : 1
        }
      }
    )
    return `
      ${filteredBooks.map(book => {
      return `
              <book-preview title="${book.title}"
                            cover="${book.cover}"
                            authors="${encodeURI(JSON.stringify(book.authors))}"
                            published="${book.published}"
                            pages="${book.pages}">
              </book-preview>
            `
    }).join("")}
    `
  }

  handleYearSelect(event) {
    let target = event.target.closest("[data-year]")
    this.currentYear = target.dataset.year
    this.innerHTML = this.render()
    this.addYearClick()
  }

  addYearClick() {
    this.querySelectorAll("[data-year]").forEach(node => {
      node.addEventListener("click", this.handleYearSelect.bind(this))
    })
  }
}

window.customElements.define("reading-list", ReadingList);