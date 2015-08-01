'use strict';
var HServices = angular.module('BookingApp.Services', ['ngResource']);


HServices.factory('Hotels', ['$resource',
	function ($resource) {
		var Hotels =  $resource('app/Data/Reviews.json', {}, {
			      query: {method:'GET'},
			      queryAll: {method:'GET', isArray: true},
			      create: {method:'POST'},
			      update: {method: 'PUT'}
			  });
		return Hotels;
}]);





