const {
    handlerTambahBuku,
    handlerSemuaBuku,
    handlerAmbilBuku,
    handlerUbahBuku,
    handlerHapusBuku
} = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: handlerTambahBuku
    },
    {
        method: 'GET',
        path: '/books',
        handler: handlerSemuaBuku,
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: handlerAmbilBuku,
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: handlerUbahBuku,
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: handlerHapusBuku,
    },
];

module.exports = routes;