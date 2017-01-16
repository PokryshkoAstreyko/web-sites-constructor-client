"use strict";
/**
 * Created by Dima on 14.01.2017.
 */
var PageToHTML = (function () {
    function PageToHTML() {
    }
    PageToHTML.transfer = function (page) {
        this.result = "";
        for (var i = 0; i < page.lineContainers.length; i++) {
            this.result += "  <div class=\"row\"\n";
            this.linecontainerToHTML(page.lineContainers[i]);
            this.result += "  </div>\n";
        }
        return this.result;
    };
    PageToHTML.linecontainerToHTML = function (linecontainer) {
        for (var i = 0; i < linecontainer.containers.length; i++) {
            this.result += "              <div class=\"col-md-" + linecontainer.containers[i].size + " style=\"padding: 0;\">\n";
            this.result += "          " + linecontainer.containers[i].postText + "\n";
            this.result += "              </div>\n";
        }
    };
    return PageToHTML;
}());
PageToHTML.result = "";
exports.PageToHTML = PageToHTML;
//# sourceMappingURL=PageToHTML.js.map