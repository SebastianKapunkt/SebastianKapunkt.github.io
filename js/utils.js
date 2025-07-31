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

const sections = document.querySelectorAll('div.anchor');
const navItems = document.querySelectorAll('.nav-item');

const highlightNavItem = () => {
  let currentSectionId = '';

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const offset = 150;
    if (sectionTop <= offset) {
      currentSectionId = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('nav-active');
    const itemHref = item.getAttribute('href');
    if (itemHref === `#${currentSectionId}`) {
      item.classList.add('nav-active');
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  highlightNavItem();
  window.addEventListener('scroll', highlightNavItem);
});