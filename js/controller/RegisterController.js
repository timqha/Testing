angular.module('myApp')
    .controller('RegisterController', ['$scope', 'Register', 'toastr', 'Storage', function ($scope, Register, toastr, Storage) {
        $scope.user = {username: null, password: null};
        $scope.repeatpass = null;
        $scope.register = function () {
            if ($scope.repeatpass == $scope.user.password) {

                Register.addNewUser($scope.user)
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
            }
        };
        //Object {success: true, token: "2daa9cd1d0c9535d480695cf7672c26b6c9bdfa0"}
    }]);