"use strict";
/**
 * Created by Dima on 11.01.2017.
 */
var Container = (function () {
    function Container(newclass, id) {
        this.class = newclass;
        this.id = id;
        this.items = [];
        this.showResize = false;
    }
    return Container;
}());
exports.Container = Container;
//# sourceMappingURL=container.js.map