angular.module('myApp')
    /** @description adding a new user.
     * @summary {register} adding a new user and redirect.
     */
    .controller('RegisterController', ['$scope', 'Register', 'toastr', 'Storage', '$state', function ($scope, Register, toastr, Storage, $state) {
        $scope.user = {username: null, password: null};
        $scope.repeatpass = null;

        /** @description sign up and writing in a cookie.
         * @param {string, string}  takes username and password to login.
         */
        $scope.register = function () {
            if ($scope.repeatpass == $scope.user.password) {

                Register.addNewUser($scope.user)
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
            }
        };

    }]);