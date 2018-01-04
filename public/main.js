var cricApp = angular.module('cricApp', ['ngRoute']);

cricApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home/home.html'
        })
        .when('/analyse', {
            templateUrl: 'analyse/analyse.html'
        });
}]);