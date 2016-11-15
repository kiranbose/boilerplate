/**
 * Created by kiran on 1/17/2016.
 */
(function(window, angular, undefined) {
    "use strict";

    var app = angular.module("main", ['ui.router','ngAnimate','ngMaterial','main.controllers']);

    app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "src/home/home.html",
                controller: 'mainController',
                onEnter: function() {
                	console.log("main");
                },
                onExit: function() {
                }
            })

    }]);

})(window, window.angular);