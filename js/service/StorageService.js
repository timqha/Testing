angular.module('myApp')
    .service("Storage", ['localStorageService', 'toastr', '$http', '$rootScope', function (localStorageService, toastr, $http, $rootScope) {

        return ({
            tokenSave: tokenSave,
            tokenReset: tokenReset,
            tokenGet: tokenGet
        });

        function tokenSave(data) {
            if (localStorageService.isSupported) {
                $rootScope.currentUser = true;
                localStorageService.set('token', data);
                $http.defaults.headers.common['Authorization'] = 'Token ' + data;
            } else {
                toastr.warning("Turn localstorage!", "Warning");
            }
        }

        function tokenReset() {
            localStorageService.remove('token');
            $rootScope.currentUser = false;
        }

        function tokenGet() {
            return localStorageService.get('token');
        }

    }]);