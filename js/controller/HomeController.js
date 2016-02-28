angular.module('myApp')
    .controller('HomeController', ['$scope', 'Product', 'toastr', 'Review', '$rootScope', 'Config', function ($scope, Product, toastr, Review, $rootScope, Config) {
        $scope.products = {};

        Product.getProduct()
            .then(function (response) {
                $scope.products = response;
                angular.forEach(response, function (product) {
                    Review.getReview(product.id)
                        .then(function (res) {
                            product.img = Config.getImage(product.img);
                            product.reviews = res;
                        })
                        .catch(function (res) {
                            toastr.warning("No data", "Warning");
                        });
                });
            })
            .catch(function (response) {
                toastr.warning("No data", "Warning");
            });
        //Review.getReview()
        $scope.review = {rate: 0, text: null};

        $scope.createReview = function (id) {
            if ($rootScope.currentUser) {
                Review.addNewReview(id, $scope.review)
                    .then(function (res) {
                        $scope.review = {rate: 0, text: null};
                    })
                    .catch(function (res) {
                        console.log(res);
                    });
            } else {
                toastr.error("You should sign in first!", "Error");
            }
        };
    }]);