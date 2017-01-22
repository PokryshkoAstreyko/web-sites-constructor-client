"use strict";
var page_1 = require("../creator/page");
/**
 * Created by Dima on 07.01.2017.
 */
var WebSite = (function () {
    function WebSite(title, description, tags, rating, menuType, menuColor) {
        this.pages = [];
        this.title = title;
        this.description = description;
        this.tags = tags;
        this.rating = rating;
        this.menuType = menuType;
        this.menuColor = menuColor;
        this.pages.push(new page_1.Page("Main"));
    }
    return WebSite;
}());
exports.WebSite = WebSite;
//# sourceMappingURL=website.js.map