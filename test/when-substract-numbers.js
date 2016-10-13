var SuperCalculatorPage = require('../test/page-objects/super-calculator-page');

describe('When subscribe numbers', function() {
    describe('super calculator should', function() {
        var calculator = {};

        beforeEach(function() {
            calculator = new SuperCalculatorPage();
            calculator.get();
            calculator.selectSubstractAction();
        });

        it('return difference between two numbers', function() {
            calculator.setFirstNumber(2);
            calculator.setSecondNumber(1);

            calculator.go();

            expect(calculator.getLatestResult()).toEqual(2 - 1 + '');
        });
    });
});
