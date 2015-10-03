/**
 * Created by The Tank on 10/2/2015.
 */
var moltinAuth = angular.module('testprojectApp.moltin', []);
moltinAuth.factory('MoltinAuth', function($q) {
        var deferred = $q.defer();
        var moltin = new Moltin({publicId: 'Ia6Ax0lPkjad5GQiT1dXZVaSJxC97upZm7ZpR53V'});
        moltin.Authenticate(function() {
            deferred.resolve(moltin);

        });

        return deferred.promise;
    });