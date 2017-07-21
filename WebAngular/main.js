// main.js
//--------------------
// Angular 1.6.4
var app = angular.module('app', ['ngAnimate', 'ngTouch', 'ui.grid', 'ui.grid.resizeColumns']);

app.controller('MyCtrl', ['$scope', '$http', 'uiGridConstants', function($scope, $http, uiGridConstants) {

    $scope.gridOptions = {

        columnDefs: [
            { field: 'ID', displayName: 'ID' },
            { field: 'Name', displayName: 'Name' },
            { field: 'VehicleType', displayName: 'Vehicle Type' },
            { field: 'BrandName', displayName: 'Brand Name' },
            { field: 'Price', displayName: 'List Price' },
            { field: 'Discount', displayName: 'Discount' },
        ]
    };
    $http.get('BhandaraScooters.json').then(function(res) {
        $scope.gridOptions.data = res.data;
    });

}]);