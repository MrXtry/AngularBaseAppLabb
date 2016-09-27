/// <reference path="../angular.js" />
/// <reference path="../angular-route.js" />

angular.module("labbModule")
    .config([
        "$routeProvider",
        "$locationProvider",
        function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider
                .when("/", {
                    templateUrl: "Views/Home.html",
                    controller: "HomeController",
                    caseInsensitiveMatch: true,
                    activeTab: "Home"
                })
                //.when("/Products", {
                //    templateUrl: "Views/Products.html",
                //    controller: "ProductsController",
                //    caseInsensitiveMatch: true,
                //    activeTab: "Products"
                //})
                //.when("/Products/:id", {
                //    templateUrl: "Views/Product.html",
                //    controller: "ProductController",
                //    caseInsensitiveMatch: true,
                //    activeTab: "Products"
                //})
                //.when("/About", {
                //    templateUrl: "",
                //    controller: "AboutController",
                //    caseInsensitiveMatch: true,
                //    activeTab: "About"
                //})
            ;
        }
    ]);