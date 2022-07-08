const {
  addBooks,
  getBooks,
  showBooks,
  putBooks,
  deleteBooks,
} = require('./handler');
const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooks,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getBooks,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: showBooks,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: putBooks,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBooks,
  },
];

module.exports = routes;
