'use strict';

/**
 * @ngdoc overview
 * @name testprojectApp
 * @description
 * # testprojectApp
 *
 * Main module of the application.
 */
angular
  .module('testprojectApp', [
    'testprojectApp.moltin',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
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
      .when('/product/:id', {
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
                product: function($q, $route, MoltinAuth) {
                    var deferred = $q.defer();
                    MoltinAuth.then(function(moltin) {
                        moltin.Product.Get($route.current.params.id, function(product) {
                            deferred.resolve(product);
                        });
                    })
                    return deferred.promise;
                }
            }
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl',
        controllerAs: 'cart'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
