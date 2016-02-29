angular.module("myApp")

    /** @description Service for connection with login api.
     * @param {login} http request to the api login.
     */

    .service("Login", ['$http', 'Config', function ($http, Config) {
        var apiUrlLogin = Config.apiUrlLogin;

        return ({
            login: login
        });
        /** @description connection with login.
         * @param {string, string}  takes username and password to login.
         * @return {promise}
         */
        function login(user) {
            var request = $http({
                method: 'POST',
                url: apiUrlLogin,
                data: {"username": user.username, "password": user.password}
            });
            return (request.then(Config.handleSuccess, Config.handleError));
        }

    }]);