class BookPreview extends HTMLElement {
  getProperties() {
    this.title = this.getAttribute("title")
    this.cover = this.getAttribute("cover")
    this.authors = JSON.parse(decodeURI(this.getAttribute("authors")))
    this.published = this.getAttribute("published")
    this.pages = this.getAttribute("pages")
  }

  connectedCallback() {
    this.getProperties()
    this.innerHTML = this.render()
  }

  render() {
    return `
    <div class="book">
      <div class="book_cover" style="background-image: url(${this.cover})"></div>
      <div class="book_content_wrapper">
        <div class="book_title">
          ${this.title}
        </div>
        <div class="book_content">
          <div class="book_descriptor">
            ${this.authors.length === 1 ? "Autor" : "Autoren"}:
          </div>
          <div class="book_value">
            ${this.authors.map(author => author.name).join(", ")}
          </div>
        </div>
        <div class="book_content">
          <div class="book_descriptor">
            Erscheinungsjahr:
          </div>
          <div class="book_value">
            ${this.published}
          </div>
        </div>
        <div class="book_content">
          <div class="book_descriptor">
            Seiten:
          </div>
          <div class="book_value">
            ${this.pages}
          </div>
        </div>
      </div>
    </div>
  `
  }
}

window.customElements.define("book-preview", BookPreview);