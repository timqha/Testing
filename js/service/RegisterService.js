angular.module('myApp')

    /** @description Service for connection with register api.
     * @param {addNewUser} add new user.
     */

    .service("Register", ['$http', 'Config', function ($http, Config) {
        var apiUrlRegister = Config.apiUrlRegister;

        return ({
            addNewUser: addNewUser
        });

        /** @description post register.
         * @param {string, string}  username and password to register.
         * @return {promise}
         */

        function addNewUser(user) {
            var request = $http({
                method: 'POST',
                url: apiUrlRegister,
                data: {"username": user.username, "password": user.password}
            });
            return (request.then(Config.handleSuccess, Config.handleError));
        }
    }]);