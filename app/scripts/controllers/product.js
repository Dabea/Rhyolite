'use strict';

/**
 * @ngdoc function
 * @name testprojectApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the testprojectApp
 */
angular.module('testprojectApp')
  .controller('ProductCtrl', function ($scope ,categories, products, moltin, $timeout, $rootScope) {
        $scope.categories = categories;
        $scope.products = products[0];
        console.log(products);

        $scope.addItem = function(itemId, quantity){
            $scope.addingItemStatus = 'Adding Item to Cart...';
            moltin.Cart.Insert(itemId, quantity, null, function(){
                $scope.addingItemStatus = 'Item Added';
                $rootScope.$apply();
                },function(error){
                console.log(error);
                $scope.addingItemStatus = 'Error Unable to add Item';
                $rootScope.$apply();
            });

            $timeout(function () {
                $scope.addingItemStatus = null;
            }, 1500);

        };

    });
