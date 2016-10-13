describe('Super Calculator App', function() {
    it('should have a default title - Super Calculator', function(done) {
        browser.get('http://juliemr.github.io/protractor-demo/');

        var defaultTitle = browser.getTitle();

        expect(defaultTitle).toEqual('Super Calculator');
    });
});
