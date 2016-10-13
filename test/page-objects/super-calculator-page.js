var SuperCalculatorPage = function() {
    var self = this;

    var url = 'http://juliemr.github.io/protractor-demo/';

    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestCalculationResult = element(by.binding('latest'));

    self.get = function() {
        browser.get(url);
    };

    self.setFirstNumber = function(number) {
        firstNumber.sendKeys(number);
    };

    self.setSecondNumber = function(number) {
        secondNumber.sendKeys(number);
    };

    self.selectSubstractAction = function() {
        var operator = element(by.model('operator'));
        operator.$('[value="SUBTRACTION"]').click();
    }

    self.go = function() {
        goButton.click();
    }

    self.getLatestResult = function() {
        return latestCalculationResult.getText();
    };
};

module.exports = SuperCalculatorPage;
