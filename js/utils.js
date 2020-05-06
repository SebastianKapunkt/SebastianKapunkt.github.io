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

const hightlightNav = (navItems) => {
    let anchorPositions = []
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove('nav-active')
        anchorPositions.push(
            [
                navItems[i],
                document.getElementById(navItems[i].getAttribute("href").replace("#","")).offsetTop
            ]
        )
    }
    for (let i = 0; i < anchorPositions.length; i++) {
        if(
            (
                i === anchorPositions.length - 1
                && document.documentElement.scrollTop + 1 >= anchorPositions[i][1]
            )
            || (
                document.documentElement.scrollTop >= anchorPositions[i][1]
                && document.documentElement.scrollTop + 1 < anchorPositions[i+1][1]
            )
        ){
            anchorPositions[i][0].classList.add("nav-active")
            history.pushState(null, null, anchorPositions[i][0].getAttribute("href"));
        }
    }
}

let navItems = document.getElementById("navigation").querySelectorAll('.nav-item')
window.addEventListener('scroll', () => hightlightNav(navItems), false);