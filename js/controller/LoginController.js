angular.module('myApp')
    .controller('LoginController', ['$scope', 'Login', 'toastr', 'Storage', function ($scope, Login, toastr, Storage) {
        $scope.user = {username: null, password: null};
        $scope.login = function () {

            Login.login($scope.user)
                .then(function (data) {
                    if (data.success) {
                        toastr.success(data.message);
                        Storage.tokenSave(data.token);
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
        $scope.logout = function () {
            Storage.tokenReset();
        };
    }]);