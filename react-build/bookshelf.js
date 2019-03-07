var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bookshelf = function (_React$Component) {
  _inherits(Bookshelf, _React$Component);

  function Bookshelf(props) {
    _classCallCheck(this, Bookshelf);

    var _this = _possibleConstructorReturn(this, (Bookshelf.__proto__ || Object.getPrototypeOf(Bookshelf)).call(this, props));

    _this.state = {
      grouped_books: groupBooksByAttribute(books_read, "year_read"),
      books: books_read,
      filter: new Date().getFullYear() + "",
      pages: sumPages(books_read)
    };

    _this.handleYearClick = _this.handleYearClick.bind(_this);
    return _this;
  }

  _createClass(Bookshelf, [{
    key: "handleYearClick",
    value: function handleYearClick(year) {
      this.setState({ filter: year });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var filtered_books = this.state.books.filter(function (book) {
        return book.year_read === _this2.state.filter;
      });
      return React.createElement(
        "div",
        { className: "bookshelf-wrapper" },
        React.createElement(
          "h1",
          null,
          "Was ich momentan lese."
        ),
        React.createElement(
          "div",
          { className: "years" },
          books_reading.map(function (book) {
            return React.createElement(Book, { book: book });
          })
        ),
        React.createElement(
          "h1",
          null,
          "Was ich bisher gelesen habe."
        ),
        React.createElement(
          "div",
          null,
          this.state.books.length,
          " B\xFCcher | ",
          this.state.pages,
          " Seiten"
        ),
        React.createElement(
          "div",
          { className: "bookshelf" },
          React.createElement(
            "div",
            null,
            Object.keys(this.state.grouped_books).map(function (key) {
              return React.createElement(ReadingYear, { year: key, filter: _this2.state.filter, books: _this2.state.grouped_books[key], onClick: _this2.handleYearClick });
            })
          ),
          React.createElement(
            "div",
            null,
            filtered_books.map(function (book) {
              return React.createElement(Book, { book: book });
            })
          )
        )
      );
    }
  }]);

  return Bookshelf;
}(React.Component);

var ReadingYear = function (_React$Component2) {
  _inherits(ReadingYear, _React$Component2);

  function ReadingYear() {
    _classCallCheck(this, ReadingYear);

    return _possibleConstructorReturn(this, (ReadingYear.__proto__ || Object.getPrototypeOf(ReadingYear)).apply(this, arguments));
  }

  _createClass(ReadingYear, [{
    key: "year_class",
    value: function year_class(filter, year) {
      if (filter === year) {
        return "year year_active";
      } else {
        return "year";
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return React.createElement(
        "div",
        { className: "year_column" },
        React.createElement(
          "div",
          {
            className: this.year_class(this.props.filter, this.props.year),
            onClick: function onClick(_) {
              return _this4.props.onClick(_this4.props.year);
            }
          },
          this.props.year
        ),
        React.createElement(
          "div",
          { className: "year_content" },
          sumPages(this.props.books),
          " Seiten"
        ),
        React.createElement(
          "div",
          { className: "year_content" },
          this.props.books.length,
          " ",
          this.props.books.length == 1 ? "Buch" : "Bücher"
        )
      );
    }
  }]);

  return ReadingYear;
}(React.Component);

var Book = function (_React$Component3) {
  _inherits(Book, _React$Component3);

  function Book() {
    _classCallCheck(this, Book);

    return _possibleConstructorReturn(this, (Book.__proto__ || Object.getPrototypeOf(Book)).apply(this, arguments));
  }

  _createClass(Book, [{
    key: "render",
    value: function render() {
      var book = this.props.book;
      return React.createElement(
        "div",
        { className: "book" },
        React.createElement("div", { className: "book_cover", style: { backgroundImage: "url(" + book.cover + ")" } }),
        React.createElement(
          "div",
          null,
          React.createElement(
            "div",
            { className: "book_title" },
            book.title
          ),
          React.createElement(
            "div",
            { className: "book_content" },
            React.createElement(
              "div",
              { className: "book_descriptor" },
              book.authors.length == 1 ? "Author" : "Authoren",
              ":"
            ),
            React.createElement(
              "div",
              { className: "book_value" },
              book.authors.map(function (author) {
                return author.name;
              }).join(", ")
            )
          ),
          React.createElement(
            "div",
            { className: "book_content" },
            React.createElement(
              "div",
              { className: "book_descriptor" },
              "Erscheinungsjahr:"
            ),
            React.createElement(
              "div",
              { className: "book_value" },
              book.published
            )
          ),
          React.createElement(
            "div",
            { className: "book_content" },
            React.createElement(
              "div",
              { className: "book_descriptor" },
              "Seiten:"
            ),
            React.createElement(
              "div",
              { className: "book_value" },
              book.pages
            )
          )
        )
      );
    }
  }]);

  return Book;
}(React.Component);

ReactDOM.render(React.createElement(Bookshelf, null), document.getElementById("bookshelf"));