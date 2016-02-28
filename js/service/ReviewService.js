angular.module('myApp')
    .service("Review", ['$http', 'Config', 'Storage', function ($http, Config, Storage) {
        var apiUrlReview = Config.apiUrlReview;

        return ({
            addNewReview: addNewReview,
            getReview: getReview
        });

        function getReview(id) {
            var request = $http({
                method: 'GET',
                url: apiUrlReview + id
            });
            return (request.then(Config.handleSuccess, Config.handleError));
        }

        function addNewReview(id, review) {
            var request = $http({
                method: 'POST',
                url: apiUrlReview + id,
                headers: {
                    'Authorization': 'Token ' + Storage.tokenGet()
                },
                data: review
            });
            return (request.then(Config.handleSuccess, Config.handleError));
        }
    }]);