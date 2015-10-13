/**
 * Created by aanderson on 10/13/2015.
 */

angular.module('testprojectApp')
    .controller('LandingCtrl', function () {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });

$(window).on('load', function() {
    $("#cover").fadeOut(200);
});



function newW() {
    $(window).load();
}
setTimeout(newW, 1000);
