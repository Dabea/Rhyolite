'use strict';

/**
 * @ngdoc function
 * @name testprojectApp.controller:StoreCtrl
 * @description
 * # StoreCtrl
 * Controller of the testprojectApp
 */
angular.module('testprojectApp')
  .controller('StoreCtrl', function ($scope ,categories, products) {
    $scope.categories = categories;
    $scope.products = products;
    console.log(products);
  });
