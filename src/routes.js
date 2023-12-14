import {
  addBookHandler, deleteBookByIdHandler,
  editBookByIdHandler,
  getAllBooksHandler,
  getBookByIdHandler,
} from './handlers.js';

const routes = [
  {
    path: '/books',
    method: 'POST',
    handler: addBookHandler,
    options: {
      tags: ['api'],
    },
  },
  {
    path: '/books',
    method: 'GET',
    handler: getAllBooksHandler,
    options: {
      tags: ['api'],
    },
  },
  {
    path: '/books/{bookId}',
    method: 'GET',
    handler: getBookByIdHandler,
    options: {
      tags: ['api'],
    },
  },
  {
    path: '/books/{bookId}',
    method: 'PUT',
    handler: editBookByIdHandler,
    options: {
      tags: ['api'],
    },
  },
  {
    path: '/books/{bookId}',
    method: 'DELETE',
    handler: deleteBookByIdHandler,
    options: {
      tags: ['api'],
    },
  },
];

export default routes;
