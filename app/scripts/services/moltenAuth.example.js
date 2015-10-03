/**
 * Created by The Tank on 10/2/2015.
 */
var moltinAuth = angular.module('testprojectApp.moltin', []);
moltinAuth.factory('MoltinAuth', function($q) {
    var deferred = $q.defer();
    var moltin = new Moltin({publicId: 'Add Molten Key here'});
    moltin.Authenticate(function() {
        deferred.resolve(moltin);

    });

    return deferred.promise;
});