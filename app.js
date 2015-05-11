
moment.locale(window.navigator.userLanguage || window.navigator.language || 'it');

var testApp = angular.module('TestApp', ['ngMaterial', 'ngMessages', 'vm-material-angular-datetime-input']);


testApp.controller('AppController', ['$scope', function ($scope) {
  $scope.date = new Date(2010, 10, 10, 10, 11);
}]);