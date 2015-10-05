'use strict';

/**
 * @ngdoc function
 * @name testprojectApp.controller:StoreCtrl
 * @description
 * # StoreCtrl
 * Controller of the testprojectApp
 */
angular.module('testprojectApp')
  .controller('StoreCtrl', function ($scope ,categories, products, $location) {
    $scope.filters = {};
    $scope.categories = categories;
    $scope.products = products;


    $scope.filterProductsByCategory = function(categoryPram) {
        $scope.search = categoryPram;

        };
    $scope.isActive = function(currentPath){
        if(currentPath == $location.path()){
            return true;
        }
    };

  });
