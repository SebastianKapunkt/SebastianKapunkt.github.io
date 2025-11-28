class ReadingList extends HTMLElement {
  constructor() {
    super()
    this.books_read = groupBooksByAttribute(books_read, "year_read")
    this.books_read = Object.entries(this.books_read).sort((a, b) => b[0] - a[0])
    this.columns = window.getComputedStyle(document.body).getPropertyValue('--columns')
    addEventListener("resize", this.onResize.bind(this))
  }

  onResize() {
    this.columns = window.getComputedStyle(document.body).getPropertyValue('--columns')
    this.innerHTML = this.render()
  }

  connectedCallback() {
    this.innerHTML = this.render()
  }

  render() {
    return `
      ${this.books_read.map(([year, books]) => {
      return `
        <div class="year__section">
          ${this.renderYear(year, books)}
          <div class="book-grid">
            ${books.map((book, index) => {
              return `${this.renderBook(book, index)}`
            }).join("")}
          </div>
        </div>
      `
      }).join("")}
    `
  }

  renderYear(year, books) {
    return `
      <div class="year__heading">
        <div class="year">
          ${ year === "2014" ? "2014 & Davor" : year }
        </div>
        <div class="year__content">
          ${sumPages(books)} Seiten |
          ${books.length} 
          ${books.length === 1 ? "Buch" : "Bücher"}
        </div>
      </div>
    `
  }

  renderBook(book, index) {
      return `
        <book-preview title="${book.title}"
                      cover="${book.cover}"
                      style="grid-row: ${Math.floor(index / this.columns) + 1};"
                      authors="${encodeURI(JSON.stringify(book.authors))}"
                      published="${book.published}"
                      pages="${book.pages}">
        </book-preview>
      `
  }
}

window.customElements.define("reading-list", ReadingList);