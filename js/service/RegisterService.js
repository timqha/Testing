angular.module('myApp')
    .service("Register", ['$http', 'Config', function ($http, Config) {
        var apiUrlRegister = Config.apiUrlRegister;

        return ({
            addNewUser: addNewUser
        });

        function addNewUser(user) {
            var request = $http({
                method: 'POST',
                url: apiUrlRegister,
                data: {"username": user.username, "password": user.password}
            });
            return (request.then(Config.handleSuccess, Config.handleError));
        }
    }]);