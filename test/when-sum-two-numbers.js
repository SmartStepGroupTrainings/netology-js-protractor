describe('When sum two numbers', function() {
    describe('super calculator should', function() {
        var firstNumber = element(by.model('first'));
        var secondNumber = element(by.model('second'));
        var goButton = element(by.id('gobutton'));
        var sum = element(by.binding('latest'));
        var superCalculatorUrl = 'http://juliemr.github.io/protractor-demo/';

        it('return sum of any two numbers', function() {
            browser.get(superCalculatorUrl);
            firstNumber.sendKeys(11);
            secondNumber.sendKeys(22);

            goButton.click();

            expect(sum.getText()).toEqual(11 + 22 + '');
        });
    });
});
