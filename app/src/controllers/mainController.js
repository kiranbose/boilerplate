
(function (window, angular, undefined) {
    "use strict";
    var mainController = angular.module('main.controllers', []);

    mainController.controller('mainController', ['$scope','$window',function ($scope,$window) {
        console.log("mainController");

    }]);
})(window, window.angular);