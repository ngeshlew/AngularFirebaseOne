'use strict';

/**
 * @ngdoc function
 * @name angularfirebaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularfirebaseApp
 */
angular.module('angularfirebaseApp')
  .controller('MainCtrl', function ($scope, Person, $firebase, fbURL) {
    $scope.add = function() {
      var save = Person.$add({
        firstName: $scope.firstName,
        lastName: $scope.lastName
      });

      $scope.firstName = '';
      $scope.lastName = '';

      if(save) {
        alert('saved successfully');
      } else  {
        alert('something went wrong');
      }
    };

    $scope.person = Person;

    $scope.remove = function(id) {
      Person.$remove(id);
    };
  })
  .controller('EditCtrl', function ($scope, $location, $routeParams, fbURL, $firebaseObject) {
    var personUrl = new Firebase(fbURL + $routeParams.id);
    $scope.person = $firebaseObject(personUrl);
    $scope.edit = function() {
        $scope.person.$save();
        $location.path('/');
    }
});
