describe('When add numbers', function() {
    describe('super calculator should', function() {
        it('return sum of 1 and 2', function() {
            browser.get('http://juliemr.github.io/protractor-demo/');
            element(by.model('first')).sendKeys(1);
            element(by.model('second')).sendKeys(2);

            element(by.id('gobutton')).click();

            var sum = element(by.binding('latest')).getText();
            expect(sum).toEqual((1 + 2).toString());
        });
    });
});
