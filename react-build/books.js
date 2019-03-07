var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Books = function (_React$Component) {
    _inherits(Books, _React$Component);

    function Books() {
        _classCallCheck(this, Books);

        return _possibleConstructorReturn(this, (Books.__proto__ || Object.getPrototypeOf(Books)).apply(this, arguments));
    }

    _createClass(Books, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "bookshelf" },
                currentbooks.map(function (book) {
                    return React.createElement(Book, { book: book });
                })
            );
        }
    }]);

    return Books;
}(React.Component);

var Book = function (_React$Component2) {
    _inherits(Book, _React$Component2);

    function Book() {
        _classCallCheck(this, Book);

        return _possibleConstructorReturn(this, (Book.__proto__ || Object.getPrototypeOf(Book)).apply(this, arguments));
    }

    _createClass(Book, [{
        key: "render",
        value: function render() {
            var book = this.props.book;
            var alt_text = "image from " + book.cover;
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "table",
                    null,
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            { colSpan: "2" },
                            React.createElement("img", { src: book.cover, height: "70", alt: alt_text })
                        )
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            { colSpan: "2" },
                            book.title
                        )
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            "author"
                        ),
                        React.createElement(
                            "td",
                            null,
                            book.authors.map(function (auther) {
                                return React.createElement(
                                    "span",
                                    null,
                                    auther.name,
                                    " "
                                );
                            })
                        )
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            "year published:"
                        ),
                        React.createElement(
                            "td",
                            null,
                            book.published
                        )
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            "pages:"
                        ),
                        React.createElement(
                            "td",
                            null,
                            book.pages
                        )
                    )
                )
            );
        }
    }]);

    return Book;
}(React.Component);