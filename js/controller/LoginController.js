angular.module('myApp')

    /** @description authorization.
     * @summary {login} sign in and writing in a cookie.
     * @summary {logout} token removal.
     */

    .controller('LoginController', ['$scope', 'Login', 'toastr', 'Storage','$state', function ($scope, Login, toastr, Storage, $state) {
        $scope.user = {username: null, password: null};

        /** @description sign in and writing in a cookie.
         * @param {string, string}  takes username and password to login.
         */
        $scope.login = function () {
            Login.login($scope.user)
                .then(function (data) {
                    if (data.success) {
                        toastr.success(data.message);
                        Storage.tokenSave(data.token);
                        $state.go('home');
                    } else {
                        toastr.warning(data.message, "Warning");
                    }
                })
                .catch(function (data) {
                    if (data.success) {
                        toastr.error(data.message, "Error");
                    } else {
                        toastr.error(data.message, "Error");
                    }
                });
        };

        /** {logout} token removal.
         */
        $scope.logout = function () {
            Storage.tokenReset();
        };

    }]);