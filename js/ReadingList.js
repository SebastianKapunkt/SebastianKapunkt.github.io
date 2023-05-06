class ReadingList extends HTMLElement {

  connectedCallback() {
    this.currentYear = this.getAttribute("startYear")
    this.innerHTML = this.render()
    this.addYearClick()
  }

  groupedBooks = groupBooksByAttribute(books_read, "year_read")

  render() {
    return `
      <div class="bookshelf">
        <div class="year-column">
          ${Object.keys(this.groupedBooks).sort((a, b) => a < b ? 1 : -1).map((key) =>
              this.getYearColumn(key)
          ).join("")}
        </div>
        <div class="book_content_wrapper">
          ${this.getBooks()}
        </div>
      </div>
    `
  }

  getYearColumn(year) {
    return `
      <div class="year-column-item">
        <div class="year ${year === this.currentYear ? "year_active" : ""}" data-year="${year}">
          ${year}
        </div>
        <div class="year_content">
          ${sumPages(this.groupedBooks[year])} Seiten
        </div> 
        <div class="year_content">
          ${this.groupedBooks[year].length} 
          ${this.groupedBooks[year].length === 1 ? "Buch" : "Bücher"}
        </div>
      </div>
    `
  }

  getBooks() {
    let filteredBooks = books_read.filter(book => book.year_read === this.currentYear)
    return `
      ${filteredBooks.sort((a,b) => a.order < b.order ? 1 : -1).map(book => 
        `
          <book-preview title="${book.title}"
                      cover="${book.cover}"
                      authors="${encodeURI(JSON.stringify(book.authors))}"
                      published="${book.published}"
                      pages="${book.pages}">
          </book-preview>
        `
      ).join("")}
    `
  }

  handleYearSelect(event) {
    this.currentYear = event.target.dataset.year
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