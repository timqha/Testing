angular.module("myApp")
    .service("Login", ['$http', 'Config', function ($http, Config) {
        var apiUrlLogin = Config.apiUrlLogin;

        return ({
            login: login
        });

        function login(user) {
            var request = $http({
                method: 'POST',
                url: apiUrlLogin,
                data: {"username": user.username, "password": user.password}
            });
            return (request.then(Config.handleSuccess, Config.handleError));
        }

    }]);