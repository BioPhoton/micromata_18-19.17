"use strict";
exports.__esModule = true;
var app_po_1 = require("./app.po");
describe('angular2 App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.Angular2Page();
    });
    it('should display message saying app works', function () {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});
