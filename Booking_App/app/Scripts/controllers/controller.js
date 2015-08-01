'use strict';

var HotelsCtrls = angular.module('BookingApp.Ctrl', []);


HotelsCtrls.controller('AllHotels', ['$scope','Hotels', 
	function ($scope,Hotels) {
		//alert(Hotels().length);
		$scope.Hotels = Hotels;
		//console.log($scope.Hotels());
}])

