const groupBooksByAttribute = (books, attribute) => {
    let grouped = {}
    books.map(book => {
        if (!grouped.hasOwnProperty(book[attribute])) {
            grouped[book[attribute]] = []
        }
        grouped[book[attribute]].push(book)
    })
    return grouped
}

const sumPages = (books) => {
    return books.reduce((total, book) => total + book.pages, 0)
}