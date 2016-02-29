angular.module('myApp')

    /** @description Service for connection with product api.
     * @param {getProduct} http.get request to the api product.
     */

    .service("Product", ['$http', 'Config', function ($http, Config) {

        var apiUrlProduct = Config.apiUrlProduct;

        return ({
            //addNewProduct: addNewProduct,
            getProduct: getProduct
        });

        //function addNewProduct(user) {
        //    var request = $http({
        //        method: 'POST',
        //        url: apiUrlProduct,
        //        data: {}
        //    });
        //    return (request.then(Config.handleSuccess, Config.handleError));
        //}

        /** @description get all product.
         * @return {promise}
         */

        function getProduct() {
            var request = $http.get(apiUrlProduct);
            return (request.then(Config.handleSuccess, Config.handleError));
        }

    }]);