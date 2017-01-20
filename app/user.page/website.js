"use strict";
var page_1 = require("../creator/page");
/**
 * Created by Dima on 07.01.2017.
 */
var WebSite = (function () {
    function WebSite(title, description, tags, rating, menuType, menuColor) {
        this.dateView = '';
        this.title = title;
        this.description = description;
        this.tags = tags;
        this.rating = rating;
        this.menuType = menuType;
        this.menuColor = menuColor;
        this.pages = [];
        this.pages.push(new page_1.Page("Main"));
        var today = new Date();
        this.date = Date.now();
        this.dateView += ('0' + today.getDate()).slice(-2) + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + today.getFullYear();
    }
    return WebSite;
}());
exports.WebSite = WebSite;
//# sourceMappingURL=website.js.map