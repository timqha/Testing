angular.module('myApp')

    /** @description Service for connection with review api.
     * @param {addNewReview} add new review.
     * @param {getReview} get review.
     */

    .service("Review", ['$http', 'Config', 'Storage', function ($http, Config, Storage) {
        var apiUrlReview = Config.apiUrlReview;

        return ({
            addNewReview: addNewReview,
            getReview: getReview
        });

        /** @description get review.
         * @param {number} indicate id of the product for which we get a review.
         * @return {promise}
         */

        function getReview(id) {
            var request = $http({
                method: 'GET',
                url: apiUrlReview + id
            });
            return (request.then(Config.handleSuccess, Config.handleError));
        }

        /** @description add review.
         * @param {number, object} indicate id of the product to which we add a review.
         * @return {promise}
         */

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