angular.module('myApp')
    .service("Product", ['$http', 'Config', function ($http, Config) {
        var apiUrlProduct = Config.apiUrlProduct;

        return ({
            addNewProduct: addNewProduct,
            getProduct: getProduct
        });

        function addNewProduct(user) {
            var request = $http({
                method: 'POST',
                url: apiUrlProduct,
                data: {}
            });
            return (request.then(Config.handleSuccess, Config.handleError));
        }

        function getProduct() {
            var request = $http.get(apiUrlProduct);
            return (request.then(Config.handleSuccess, Config.handleError));
        }
    }]);