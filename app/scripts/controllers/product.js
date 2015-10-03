'use strict';

/**
 * @ngdoc function
 * @name testprojectApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the testprojectApp
 */
angular.module('testprojectApp')
  .controller('ProductCtrl', function ($scope ,categories, product) {
        $scope.categories = categories;
        $scope.product = product;
        console.log(product);
    });
