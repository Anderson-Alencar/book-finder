const getBooks = (search) => (
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
    .then((response) => response.json())
    .then((data) => data.items)
    .then((items) => items.map((item) => item.volumeInfo))
);

export default getBooks;
