'use strict';

var HotelsCtrls = angular.module('BookingApp.Ctrl', []);

	//pagination ------------------
	    HotelsCtrls.filter('offset', function () {
	        return function (input, start) {
	            start = parseInt(start, 10);
	            return input.slice(start);
	        };
	    });
	//pagination ------------------

HotelsCtrls.controller('AllHotels', ['$scope', 'Hotels',
	function ($scope, Hotels) {
	    $scope.Hotels = [];
	    $scope.itemsPerPage = 6;
	    $scope.currentPage = 0;
	        Hotels.query(function (data) {
	            $scope.Hotels = data;
	            $scope.allItemsCount = $scope.Hotels.length;
	        });
	}]);

