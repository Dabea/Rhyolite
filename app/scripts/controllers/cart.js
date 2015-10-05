'use strict';

/**
 * @ngdoc function
 * @name testprojectApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the testprojectApp
 */
angular.module('testprojectApp')
  .controller('CartCtrl',function ($scope ,categories, products, cartObject) {
        $scope.categories = categories;
        $scope.products = products[0];
        $scope.cartData = cartObject;
        console.log($scope.cartData);




    });
