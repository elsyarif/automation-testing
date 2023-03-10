const createServer = require('./createServer');
const MathBasic = require('./MathBasic')
const FigureCalculator = require('./FigureCalculator')

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

    describe('When GET /subtract', () => {
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

    describe('When GET /rectangle/perimeter/{length}/{width}', () => {
        it('should response with a status code of 200 and the payload value is rectangle perimeter result of length and width correctly', async() => {
            const length = 20;
            const width = 15;

            const figureCalculator = new FigureCalculator(MathBasic)
            const spyCalculateRectanglePerimeter = jest.spyOn(figureCalculator, 'calculateRectanglePrimeter')

            const server = createServer({ figureCalculator });

            const response = await server.inject({
                method: 'GET',
                url: `/rectangle/perimeter/${length}/${width}`,
            });

            const responseJson = JSON.parse(response.payload);

            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(70);
            expect(spyCalculateRectanglePerimeter).toBeCalledWith(length, width);
        });
     });

    describe('When GET /rectangle/area/{length}/{width}', () => {
        it('should response with a status code of 200 and the payload value is rectangle area result of length and width correctly', async() => {
            const length = 20;
            const width = 15;

            const figureCalculator = new FigureCalculator(MathBasic);
            const spyCalculateRectangleArea = jest.spyOn(figureCalculator, 'calculateRectangleArea');
            const server = createServer({figureCalculator});

            const response = await server.inject({
                method: 'GET',
                url: `/rectangle/area/${length}/${width}`,
            });

            const responseJson = JSON.parse(response.payload);

            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(300);
            expect(spyCalculateRectangleArea).toBeCalledWith(length, width);
        });
    });

    describe('When GET /triangle/perimeter/{sideA}/{sideB}/{base}', () => {
        it('should response with a status code of 200 and the payload value is triangle perimeter result of sideA, sideB, and base correctly ', async() => {
            const sideA = 8;
            const sideB = 9;
            const base = 5;

            const figureCalculator = new FigureCalculator(MathBasic);
            const spyCalculatorTrianglePerimeter = jest.spyOn(figureCalculator, 'calculateTrianglePerimeter')

            const server = createServer({ figureCalculator });

            const response = await server.inject({
                method: 'GET',
                url: `/triangle/perimeter/${sideA}/${sideB}/${base}`,
            });

            const responseJson = JSON.parse(response.payload);

            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(22);
            expect(spyCalculatorTrianglePerimeter).toBeCalledWith(sideA, sideB, base);
        });
    });

    describe('When GET /triangle/area/{base}/{height}', () => {
        it('should response with a status code of 200 and the payload value is triangle area result of base, height correctly', async() => {
            const base = 8;
            const height = 10;

            const figureCalculator = new FigureCalculator(MathBasic);
            const spyCalculateTriangleArea = jest.spyOn(figureCalculator, 'calculateTriangleArea');

            const server = createServer({figureCalculator});

            const response = await server.inject({
                method: 'GET',
                url: `/triangle/area/${base}/${height}`,
            });

            const responseJson = JSON.parse(response.payload);

            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(40);
            expect(spyCalculateTriangleArea).toBeCalledWith(base, height);
        })
    })
})
