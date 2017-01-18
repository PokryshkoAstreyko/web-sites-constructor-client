/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',

            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/http/testing': 'npm:@angular/http/bundles/http-testing.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

            'ng2-dnd': 'node_modules/ng2-dnd/bundles/index.umd.js',
             'ng2-summernote': 'node_modules/ng2-summernote',
            'ng2-color-picker': 'node_modules/ng2-color-picker',
            'ng2-bootstrap': 'node_modules/ng2-bootstrap/bundles/ng2-bootstrap.umd.js',
            "ng2-rating": "node_modules/ng2-rating",
            'angular2-datatable': 'npm:angular2-datatable',
            'lodash': 'npm:lodash/lodash.js',
            'angular-tag-cloud-module': 'npm:angular-tag-cloud-module',

            // other libraries
            'rxjs': 'npm:rxjs',
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular2-datatable': {
                main: 'index.js',
                defaultExtension: 'js'
            },
            'angular-tag-cloud-module': {
                main: 'index.js',
                defaultExtension: 'js'
            },
            // 'ng2-dnd':  { defaultExtension: 'js' }
            'ng2-color-picker': { main: 'lib/index.js', defaultExtension: 'js', map: {
                './lib/src/components': './lib/src/components/index.js',
                './lib/src/models': './lib/src/models/index.js'
            }},
            "ng2-rating": { "main": "index.js", "defaultExtension": "js" },


        }
    });
})(this);

