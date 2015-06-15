
moment.locale(window.navigator.userLanguage || window.navigator.language || 'it');

var testApp = angular.module('TestApp', ['ngMaterial', 'ngMessages', 'vm-datetime-writer']);


testApp.controller('AppController', ['$scope', function ($scope) {
  $scope.date = null;//new Date(2010, 10, 10, 10, 11);
}]);