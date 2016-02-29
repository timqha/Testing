angular.module('myApp')
    .factory('Config', function ($q) {
        var Config = {};

        Config.apiUrlRegister = 'http://smktesting.herokuapp.com/api/register/';
        Config.apiUrlLogin = 'http://smktesting.herokuapp.com/api/login/';
        Config.apiUrlProduct = 'http://smktesting.herokuapp.com/api/products/';
        Config.apiUrlReview = 'http://smktesting.herokuapp.com/api/reviews/';

        Config.getImage = function (imangeName) {
            return "http://smktesting.herokuapp.com/static/" + imangeName;
        };

        //Headers
        Config.config = {heders: 'application/json; charset=UTF-8'};

        //response success
        Config.handleSuccess = function (response) {
            return ( response.data);
        };

        //response error . $q defer problem
        Config.handleError = function (response) {
            //  var deferred = $q.defer();
            if (!angular.isObject(response.data) || !response.data.message) {
                return ( $q.reject("An unknown error occurred.") );
            }
            return ( $q.reject(response.data.message) );
        };
        return Config;
    });