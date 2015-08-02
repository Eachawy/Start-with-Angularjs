'use strict';
var HServices = angular.module('BookingApp.Services', ['ngResource']);


HServices.factory('Hotels', ['$resource',
	function ($resource) {
	    return  $resource('app/Data/Reviews.json');
}]);


