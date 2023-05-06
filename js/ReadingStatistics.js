class ReadingStatistics extends HTMLElement {

  connectedCallback() {
    this.startYear = Number(this.getAttribute("startYear"))
    this.yearsOfReading = this.currentYear - this.startYear
    this.innerHTML = this.render()
  }

  currentYear = new Date().getFullYear()
  pages = sumPages(books_read)

  render() {
    return `
      <div class="book-summary">
        ${this.startYear}&nbsp;&mdash;&nbsp;${this.currentYear}&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <div class="book-summary">
        ${books_read.length} Bücher | ${this.pages} Seiten
      </div>
      <div class="book-summary">
        ${this.getBookReadPerYear()} Bücher pro Jahr
        | ${this.getPagesReadPerYear()} Seiten pro Jahr
      </div>
    `
  }

  getBookReadPerYear() {
    return Number(
      (books_read.length / this.yearsOfReading).toFixed(1)
    )
  }

  getPagesReadPerYear() {
    return Number(
      (this.pages / this.yearsOfReading).toFixed(1)
    )
  }
}

window.customElements.define("reading-statistics", ReadingStatistics);