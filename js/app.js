angular.module('myApp', ['ui.router', 'ngAnimate', 'toastr', 'LocalStorageModule', 'ngRating'])
angular.module("myApp")
    .run(function ($rootScope, $http, Storage) {

        //watching the value of the currentUser variable.
        if (Storage.tokenGet()) {
            $rootScope.currentUser = true;
            $http.defaults.headers.common['Authorization'] = 'Token ' + Storage.tokenGet();
        } else {
            $rootScope.currentUser = false;
        }

    });