class BookPreviewList extends HTMLElement {
  connectedCallback() {
    this.innerHTML = this.render()
  }

  render() {
    return `
      ${currentBooks.map(book => {
      return `
        <book-preview title="${book.title}"
                      cover="${book.cover}"
                      authors="${encodeURI(JSON.stringify(book.authors))}"
                      published="${book.published}"
                      pages="${book.pages}">
        </book-preview>
        `
    })}
    `
  }
}

window.customElements.define("book-preview-list", BookPreviewList);