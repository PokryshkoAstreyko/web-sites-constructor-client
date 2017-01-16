/**
 * Created by Dima on 07.01.2017.
 */
"use strict";
var UserWebSite = (function () {
    function UserWebSite(userMainPage, title, description, tags) {
        this.userMainPage = userMainPage;
        this.title = title;
        this.description = description;
        this.tags = tags;
        this.rating = 3.5;
    }
    return UserWebSite;
}());
exports.UserWebSite = UserWebSite;
//# sourceMappingURL=user.website.js.map