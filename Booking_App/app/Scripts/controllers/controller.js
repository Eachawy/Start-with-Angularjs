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

            // Filter by javascript ---------------------------------------
	            //var invalidEntries = 0;function filterByID(obj) { if ((obj.ID) == 'H50001') { return true; } else { invalidEntries++; return false; } };
	            //$scope.Hotels = data.filter(filterByID)
	        // Filter by javascript ---------------------------------------

	            $scope.Hotels = data;
	            $scope.allItemsCount = $scope.Hotels.length;
	    });

	    // Filter by angularjs -------------------------------
	        //$scope.customArrayFilter = function (item) {
	        //    return (item.ID == 'H50001');
	        //};
	    // Filter by angularjs -------------------------------



	}]);

HotelsCtrls.controller('BookingCreateController', function ($scope, Hotels) {
    $scope.Hotel = new Hotels();  //create new Hotel instance. Properties will be set via ng-model on UI

    $scope.addBooking = function () { //create a new Hotel. Issues a POST to /api/movies
        console.log($scope.Hotel);
        $scope.Hotel.$save(function () {
            alert('thanks');
            //$state.go('movies'); // on success go back to home i.e. movies state.
        });
    };
});
