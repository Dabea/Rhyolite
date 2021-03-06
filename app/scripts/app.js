'use strict';

/**
 * @ngdoc overview
 * @name testprojectApp
 * @description
 * # testprojectApp
 *
 * Main module of the application.
 */
var testProjectApp = angular
  .module('testprojectApp', [
    'testprojectApp.moltin',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

testProjectApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
       .when('/checkout', {
           templateUrl: 'views/checkout.html',
           controller: 'CheckoutCtrl',
           controllerAs: 'checkout'
       })
       .when('/landing', {
           templateUrl: 'views/landing.html',
           controller: 'LandingCtrl',
           controllerAs: 'landing'
        })
      .when('/store', {
        templateUrl: 'views/store.html',
        controller: 'StoreCtrl',
        controllerAs: 'store',
        resolve: {
            categories: function($q, MoltinAuth) {
                var deferred = $q.defer();
                $q.when(MoltinAuth).then(function(moltin){
                    moltin.Category.List(null, function(categories){
                        deferred.resolve(categories);
                    });
                });
                return deferred.promise;
            },
            products: function($q, MoltinAuth) {
                var deferred = $q.defer();
                $q.when(MoltinAuth).then(function(moltin){
                    moltin.Product.List(null, function(products){
                        deferred.resolve(products);
                    });
                });
                return deferred.promise;
            }
        }
      })
      .when('/category', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl',
        controllerAs: 'category'
      })
      .when('/product/:slug', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl',
        controllerAs: 'product',
            resolve: {
                categories: function($q, MoltinAuth) {
                    var deferred = $q.defer();
                    $q.when(MoltinAuth).then(function(moltin){
                        moltin.Category.List(null, function(categories){
                            deferred.resolve(categories);
                        });
                    });
                    return deferred.promise;
                },
                products: function($q, MoltinAuth, $route) {
                    var deferred = $q.defer();
                    MoltinAuth.then(function(moltin) {
                        moltin.Product.Find( { slug: $route.current.params.slug } , function(product) {
                            deferred.resolve(product);
                        });
                    });
                    return deferred.promise;
                },
                moltin: function(MoltinAuth){
                    return MoltinAuth;
                }
            }
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl',
        controllerAs: 'cart',
            resolve: {
                categories: function($q, MoltinAuth) {
                    var deferred = $q.defer();
                    $q.when(MoltinAuth).then(function(moltin){
                        moltin.Category.List(null, function(categories){
                            deferred.resolve(categories);
                        });
                    });
                    return deferred.promise;
                },
                products: function($q, MoltinAuth, $route) {
                    var deferred = $q.defer();
                    MoltinAuth.then(function(moltin) {
                        moltin.Product.Find( { slug: $route.current.params.slug } , function(product) {
                            deferred.resolve(product);
                        });
                    });
                    return deferred.promise;
                },
                cartObject: function ($q, MoltinAuth){
                    var deferred = $q.defer();
                    $q.when(MoltinAuth).then(function(moltin){
                        moltin.Cart.Contents(function(cart){
                            deferred.resolve(cart);
                        });
                    });
                    return deferred.promise;
                },
                moltin: function(MoltinAuth){
                    return MoltinAuth;
                }
            }
      })
      .otherwise({
        redirectTo: '/'
      });
  });


testProjectApp.directive('loadingScreen', function($rootScope){
   return{
       restrict: 'E',
       template: "<div ng-show='isRouteLoading' class='loading-indicator'>" +
       "<div class='loading-indicator-body'>" +
       "<h3 class='loading-title'>Loading...</h3>" +
       "<div class='spinner'><rotating-plane-spinner></rotating-plane-spinner></div>" +
       "</div>" +
       "</div>",
       replace: true,
       link: function(scope, element, attrs){
           $scope.isLoading = false;

           $rootScope.$on($routChange);
       }
   };

});

/*app.filter('filterBycatogories', function () {
    return function (items, catogories) {
        var filtered = [];
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item == catogories)) {
                filtered.push(item);
            }
        }
        return filtered;
    };
});
    */