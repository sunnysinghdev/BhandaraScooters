// main.js
//--------------------
// Angular 1.6.4
var app = angular.module('app', ['ngAnimate', 'ngTouch', 'ui.grid', 'ui.grid.resizeColumns']);

app.controller('GridCtrl', ['$scope', '$http', 'uiGridConstants', function($scope, $http, uiGridConstants) {

    $scope.gridOptions = {

        columnDefs: [
            { field: 'ID', displayName: 'Item Id' },
            { field: 'Name', displayName: 'Name' },
            { field: 'VehicleType', displayName: 'Vehicle Type' },
            { field: 'BrandName', displayName: 'Brand Name' },
            { field: 'Price', displayName: 'List Price', cellClass: "text-right", width: 100 },
            { field: 'Discount', displayName: 'Discount', cellClass: "text-right", width: 100 },
        ]
    };
    $http.get('inv_parts.json').then(function(res) {
        $scope.gridOptions.data = res.data;
    });

}]);