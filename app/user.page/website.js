"use strict";
/**
 * Created by Dima on 07.01.2017.
 */
var WebSite = (function () {
    function WebSite(title, description, tags, rating, typeMenu, colorMenu) {
        this.title = title;
        this.description = description;
        this.tags = tags;
        this.rating = 3.5;
        this.typeMenu = typeMenu;
        this.colorMenu = colorMenu;
        this.pages = [];
    }
    return WebSite;
}());
exports.WebSite = WebSite;
//# sourceMappingURL=website.js.map