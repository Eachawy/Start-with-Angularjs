'use strict';

angular.module('BookingApp', ['ngRoute','BookingApp.Services','BookingApp.Ctrl'])
	.config(function ($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'app/views/main.html',
				controller: 'AllHotels'
			}).
			otherwise({ 
				redirectTo: '/' 
			})
	});



