(function(angular) {
  'use strict';
	var myApp = angular.module('primeApp', []);

	myApp.controller('MainController', ['$scope', function($scope) {
	    $scope.name = 'Homer'
	    $scope.type = 'Day'
	    $scope.list = ['Homer', 'Marge', 'Bart', 'Lisa', 'Maggy']
	    $scope.show = false
	    $scope.myClick = function () {

	    };

	}]);

})(window.angular);