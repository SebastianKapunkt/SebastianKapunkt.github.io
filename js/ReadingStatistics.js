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
      <div style="display: flex; flex-flow: row wrap; justify-content: center; align-items: center; gap: 32px;">
        <div class="year">${this.startYear}&nbsp;&mdash;&nbsp;${this.currentYear}</div>
        <div>
          <div class="book-summary-title">Insgesamt</div>
          <div class="book-summary">
            <div style="text-align: right;">${books_read.length} Bücher</div>
            <div>|</div>
            <div style="text-align: left;">${this.pages} Seiten</div>
          </div>
        </div>
        <div>
          <div class="book-summary-title">pro Jahr</div>
          <div class="book-summary">
            <div style="text-align: right;">${this.getBookReadPerYear()} Bücher</div>
            <div>|</div> 
            <div style="text-align: left;">${this.getPagesReadPerYear()} Seiten</div>
          </div>
        </div>
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