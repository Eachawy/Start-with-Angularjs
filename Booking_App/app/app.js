'use strict';

angular.module('BookingApp', ['ngRoute', 'BookingApp.Services', 'BookingApp.Ctrl', 'Hotels.dir'])
	.config(function ($routeProvider) {
		$routeProvider.
			when('/main', {
			templateUrl: 'app/views/main.html',
			controller: 'AllHotels'
			}).
			when('/Details', {
			    templateUrl: 'app/views/HotelsDetails.html',
			    controller: ''
			}).
			when('/Add', {
			    templateUrl: 'app/views/AddEdit.html',
			    controller: 'BookingCreateController'
			}).
			when('/Edit', {
			    templateUrl: 'app/views/AddEdit.html',
			    controller: ''
			}).
			when('/view', {
			    templateUrl: 'app/views/viewlist.html',
			    controller: ''
			}).
			otherwise({ 
			    redirectTo: '/main'
			})
	});







