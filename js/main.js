var myApp = angular.module('myApp', []);

myApp.factory('Roster', function() {
    var Roster = {};
    Roster.list = [{
        alpha : {

        },beta : {

        },gamma : {

        },delta : {

        },epsilon : {

        },zeta : {

        },eta : {

        },theta : {

        },iota : {

        },kappa : {

        },lambda : {

        },mu : {

        },nu : {

        },xi : {

        },omicron : {

        },pi : {

        },rho : {

        },sigma : {

        },tau : {

        }

      }];
    return Roster;
})

function RosterCtrl($scope, Roster) {
    $scope.roster = Roster;
}