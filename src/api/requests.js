/* eslint-disable no-console */
const getBooks = (search) => (
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=40`)
    .then((response) => response.json())
    .catch((err) => console.log(err))
);

export default getBooks;
