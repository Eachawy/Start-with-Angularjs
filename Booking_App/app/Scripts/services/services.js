'use strict';
var HServices = angular.module('BookingApp.Services', ['ngResource']);


HServices.factory('Hotels', ['$resource',
	function ($resource) {
		var Hotels =  $resource('app/Data/Reviews.json', {}, {
			      query: {method:'GET'},
			      queryAll: {method:'GET', isArray: true},
			      create: {method:'POST'},
			      update: {method: 'PUT'},
				      function(successResult){
				      	console.log ('Success');
				      }, function(errorResult){
				      		console.log ('error');
				      }
			  });




		
		return Hotels;
}]);



Hotels.queryAll(function (result) {
   angular.isArray(result); // should be true
}, function (error) 
{
    alert()
});




