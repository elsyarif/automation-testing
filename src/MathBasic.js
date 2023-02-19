const MathBasic = {
    _validation(args)  {
        if (args.length !== 2 ) {
            throw new Error('fungsi add hanya menerima dua parameter');
        }

        const [a, b] = args;

        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('fungsi hanya menerima parameter number')
        }

        return args
    },

    add(...args) {
        const [a, b] = this._validation(args)
        return a + b;
    },

    subtract(...args) {
        const [a, b] = this._validation(args)
        return a - b;
    },

    multiply(...args) {
        const [a, b] = this._validation(args)
        return a * b;
    },

    divide(...args) {
        const [a, b] = this._validation(args)

        if (a === 0 || b === 0) {
            throw new Error('fungsi tidak menerima parameter zero')
        }

        return a/b;
    }
}

module.exports = MathBasic;
