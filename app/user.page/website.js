"use strict";
/**
 * Created by Dima on 07.01.2017.
 */
var WebSite = (function () {
    function WebSite(title, description, tags, rating, typeMenu, colorMenu) {
        this.dateView = '';
        this.title = title;
        this.description = description;
        this.tags = tags;
        this.rating = 3.5;
        this.typeMenu = typeMenu;
        this.colorMenu = colorMenu;
        this.pages = [];
        var today = new Date();
        this.date = Date.now();
        this.dateView += ('0' + today.getDate()).slice(-2) + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + today.getFullYear();
    }
    return WebSite;
}());
exports.WebSite = WebSite;
//# sourceMappingURL=website.js.map