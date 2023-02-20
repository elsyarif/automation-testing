const createServer = require('./createServer');
const MathBasic = require('./MathBasic')

describe('A HTTP Server', () => {
    describe('When GET /add', () => {
        it('should response with a status code of 200 and the payload value is addition result of a and b correctly', async() => {
            const a = 10;
            const b = 20;

            const spyAdd = jest.spyOn(MathBasic, 'add');
            const server = createServer({ mathBasic : MathBasic});

            // action 
            const response = await server.inject({
                method: 'GET',
                url: `/add/${a}/${b}`,
            });

            // assert
            const responseJson = JSON.parse(response.payload);

            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(30);
            expect(spyAdd).toBeCalledWith(a, b);
        });
    });

    describe('When GET /suctract', () => {
        it('should response with a status code of 200 and the palyload value is subtraction result of a and b correctly', async() => {
            const a = 12;
            const b = 8;

            const spySubtract = jest.spyOn(MathBasic, 'subtract');

            const server = createServer({ mathBasic: MathBasic});

            // action 
            const response = await server.inject({
                method: 'GET',
                url: `/subtract/${a}/${b}`,
            });

            const responseJson = JSON.parse(response.payload);

            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(4);
            expect(spySubtract).toBeCalledWith(a, b);
        });
    });

    describe('When GET /multiply', () => {
        it('should response with a status code of 200 and the payload value is multiply result of a and b correctly', async() => {
            const a = 5;
            const b = 4;
            
            const spyMultiply = jest.spyOn(MathBasic, 'multiply');

            const server = createServer({ mathBasic: MathBasic });

            //action 
            const response = await server.inject({
                method: 'GET',
                url: `/multiply/${a}/${b}`,
            });

            const responseJson = JSON.parse(response.payload);

            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(20);
            expect(spyMultiply).toBeCalledWith(a, b);
        });
    });

    describe('When GET /divide', () => {
        it('should response with a status code of 200 and the payload value is divident result of a and b correctly', async() => {
            const a = 20;
            const b = 2;

            const spyDivide = jest.spyOn(MathBasic, 'divide');

            const server = createServer({ mathBasic: MathBasic });

            // action 
            const response = await server.inject({
                method: 'GET',
                url: `/divide/${a}/${b}`,
            });

            const responseJson = JSON.parse(response.payload);

            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(10);
            expect(spyDivide).toBeCalledWith(a, b);
        });
    });

    describe('When GET /rectangle/perimeter', () => { 
        it('should response with a status code of 200 and the payload value is rectacle perimeter result of length and width correctly', async() => {
            const length = 20;
            const witdh = 15;

            const spyAdd = jest.spyOn(MathBasic, 'add');
            const spyMultipy = jest.spyOn(MathBasic, 'multiply');

            const server = createServer({ mathBasic: MathBasic });
            
            const response = await server.inject({
                method: 'GET',
                url: `/rectangle/perimeter/${length}/${witdh}`,
            });

            const responseJson = JSON.parse(response.payload);

            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(70);
            expect(spyAdd).toBeCalledWith(length, witdh);
            expect(spyMultipy).toBeCalledWith(2, 35);
        })
     })
})