describe('AngularJS home page', function() {
    it('should have a default title', function() {
        browser.get('http://angularjs.org');

        var title = browser.getTitle();

        expect(title).toEqual('AngularJS — Superheroic JavaScript MVW Framework');
    });
});
