'use strict';

/**
 * @ngdoc function
 * @name testprojectApp.controller:StoreCtrl
 * @description
 * # StoreCtrl
 * Controller of the testprojectApp
 */
angular.module('testprojectApp')
  .controller('StoreCtrl', function ($scope ,categories, products, $location, MoltinAuth,  $q ) {
    $scope.filters = {};
    $scope.categories = categories;
    $scope.products = products;

   console.log($scope.categories);
    $scope.filterProductsByCategory = function(categoryPram) {
        $scope.search = categoryPram;

        };
    $scope.isActive = function(currentPath){
        if(currentPath === $location.path()){
            return true;
        }
    };


    function getCatogories(){
        var deferred = $q.defer();  // set up a refrance to the defered
        $q.when(MoltinAuth).then(function(moltin){ // When MoltinAuth Gets its responce back   it starts a function that requires moltin  // Moltin is recived from MoltinAuth
            moltin.Category.List(null, function(categories){ // Calls out and gets the data from the database via the moltin API
                deferred.resolve(categories);  // Waits for the data to come back and once it dose complets the promise
            });
        });
        return deferred.promise;  //return the promise  ??  -- getting a promise object but unable to acces the value of the promise -- ??
    }



  });
