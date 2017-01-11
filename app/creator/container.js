/**
 * Created by Dima on 11.01.2017.
 */
"use strict";
var Container = (function () {
    function Container() {
        this.size = 2;
        this.postText = "213";
    }
    Container.prototype.toIncreaseSize = function () {
        if (this.size != 12) {
            this.size++;
        }
    };
    Container.prototype.toDecreaseSize = function () {
        if (this.size != 1) {
            this.size--;
        }
    };
    return Container;
}());
exports.Container = Container;
//# sourceMappingURL=container.js.map