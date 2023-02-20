const Hapi = require('@hapi/hapi');

const createServer = ({ mathBasic }) => {
    const server = Hapi.Server({
        host: 'localhost',
        port: 5000,
    });

    server.route([
        {
            method: 'GET',
            path: '/add/{a}/{b}',
            handler: (request) => {
                const {a, b} = request.params;

                const value = mathBasic.add(Number(a), Number(b));

                return { value };
            },
        },
        {
            method: 'GET',
            path: '/subtract/{a}/{b}',
            handler: (request) => {
                const {a, b} = request.params;

                const value = mathBasic.subtract(Number(a), Number(b));

                return { value };
            },
        },
        {
            method: 'GET',
            path: '/multiply/{a}/{b}',
            handler: (request) => {
                const {a, b} = request.params;

                const value = mathBasic.multiply(Number(a), Number(b));

                return { value };
            },
        },
        {
            method: 'GET',
            path: '/divide/{a}/{b}',
            handler: (request) => {
                const {a, b} = request.params;

                const value = mathBasic.divide(Number(a), Number(b));

                return { value };
            },
        },
        {
            method: 'GET',
            path: '/rectangle/perimeter/{length}/{width}',
            handler: (request) => {
                const {length, width} = request.params;

                const add = mathBasic.add(Number(length), Number(width));
                const value = mathBasic.multiply(2, add);

                return { value };
            },
        },
    ]);

    return server;
}

module.exports = createServer;