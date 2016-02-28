angular.module('myApp')
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "templates/home.html",
                controller: 'HomeController'
            })
            .state('login', {
                url: "/login",
                templateUrl: "templates/login.html",
                controller: 'LoginController'
            })
            .state('register', {
                url: "/register",
                templateUrl: "templates/register.html",
                controller: 'RegisterController'
            });

        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
    });
