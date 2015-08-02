'use strict';

var Hotelsdirective = angular.module('Hotels.dir', []);

Hotelsdirective.directive('pagination', function factory() {

    var controller = ['$scope', function ($scope) {




        $scope.range = function () {
            var rangeSize = Math.ceil($scope.allItemsCount / $scope.itemsPerPage);
            var ret = [];
            var start;
            start = $scope.currentPage;
            if (start > $scope.pageCount() - rangeSize) {
                start = $scope.pageCount() - rangeSize + 1;
            }

            for (var i = start; i < start + rangeSize; i++) {
                ret.push(i);
            }
            return ret;
        };
        $scope.prevPage = function () {
            if ($scope.currentPage > 0) {
                $scope.currentPage--;
            }
        };
        $scope.prevPageDisabled = function () {
            return $scope.currentPage === 0 ? "disabled" : "";
        };
        $scope.pageCount = function () {
            return Math.ceil($scope.allItemsCount / $scope.itemsPerPage) - 1;
        };
        $scope.nextPage = function () {
            if ($scope.currentPage < $scope.pageCount()) {
                $scope.currentPage++;
            }
        };
        $scope.nextPageDisabled = function () {
            return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
        };
        $scope.setPage = function (n) {
            $scope.currentPage = n;
        };
    }];
      
    return {
        restrict: 'EA', //Default in 1.3+
        $scope: {
            datasource: '=',
            add: '&',
        },
        controller: controller,
        template: '<div class="pagination"><ul><li ng-class="prevPageDisabled()"><a href="javascript:void(0);" ng-click="prevPage()">&laquo; Prev</a></li><li ng-repeat="n in range()" ng-class="{active: n == currentPage}" ng-click="setPage(n)"><a href="javascript:void(0);">{{n+1}}</a></li><li ng-class="nextPageDisabled()"><a href="javascript:void(0);" ng-click="nextPage()">Next &raquo;</a></li></ul></div>'
    };
});









