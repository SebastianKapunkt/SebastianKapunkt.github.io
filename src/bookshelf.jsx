class Bookshelf extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
       grouped_books: groupBooksByAttribute(books_read, "year_read"),
       books: books_read,
       filter: new Date().getFullYear() + "",
       pages: sumPages(books_read)
    };

    this.handleYearClick = this.handleYearClick.bind(this)
  }

  handleYearClick(year){
    this.setState({filter: year})
  }

  render() {
    let filtered_books = this.state.books.filter(book => book.year_read === this.state.filter)
    return (
      <div className="bookshelf-wrapper">
        <h1 className="section-heading">Was ich momentan lese</h1>
        <div className="years">
          {books_reading.map(book => 
            <Book book={book}/>
          )}
        </div>
        <h1 className="section-heading">Was ich bisher gelesen habe</h1>
        <h3>{this.state.books.length} Bücher | {this.state.pages} Seiten</h3>
        <h3>
          {Number((this.state.books.length/24).toFixed(1))} Bücher pro Jahr 
          | {Number((this.state.pages/24).toFixed(1))} Seiten pro Jahr</h3>
        <div className="bookshelf">
          <div className="year-column">
            {Object.keys(this.state.grouped_books).sort((a,b) => a < b ? 1 : -1
            ).map((key) =>
                <ReadingYear year={key} filter={this.state.filter} books={this.state.grouped_books[key]} onClick={this.handleYearClick}/>
            )}
          </div>
          <div className="book_content_wrapper">
            {filtered_books.sort((a,b) => a.order < b.order ? 1 : -1).map(book => 
              <Book book={book}/>
            )}
          </div>
        </div>
      </div>
    );
  }
}

class ReadingYear extends React.Component {
  year_class(filter, year){
    if(filter === year){
      return "year year_active"
    }else {
      return "year"
    }
  }

  render() {
    return (
      <div className="year-column-item">
        <div 
          className={this.year_class(this.props.filter, this.props.year)}
          onClick={_ => this.props.onClick(this.props.year)}
        >
          {this.props.year}
        </div>
        <div className="year_content">
          {sumPages(this.props.books)} Seiten
        </div> 
        <div className="year_content">
          {this.props.books.length} {this.props.books.length == 1 ? "Buch" : "Bücher"}
        </div>
      </div>
    );
  }
}

class Book extends React.Component {
  render() {
      const book = this.props.book;
      return ( 
        <div className="book">
          <div className="book_cover" style={{backgroundImage: "url(" + book.cover + ")"}}></div>
          <div className="book_content_wrapper">
            <div className="book_title">
              {book.title}
            </div>
            <div className="book_content">
              <div className="book_descriptor">
                {book.authors.length == 1 ? "Author" : "Authoren"}:
              </div>
              <div className="book_value">
                {book.authors.map(author => author.name).join(", ")}
              </div>
            </div>
            <div className="book_content">
              <div className="book_descriptor">
                Erscheinungsjahr:
              </div>
              <div className="book_value">
                {book.published}
              </div>
            </div>
            <div className="book_content">
              <div className="book_descriptor">
                Seiten:
              </div>
              <div className="book_value">
                {book.pages}
              </div>
            </div>
          </div>
        </div>
      )
  }
}

ReactDOM.render(<Bookshelf />, document.getElementById("bookshelf"));
