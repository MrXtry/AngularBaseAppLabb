/// <reference path="../angular.js" />

angular.module("labbModule")
    .controller("HomeController", [
        "$scope",
        function ($scope) {
            $scope.title = "Home";
        }
    ]);