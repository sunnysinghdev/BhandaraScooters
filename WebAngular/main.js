// main.js
var app = angular.module('app', ['ngTouch', 'ui.grid', 'ui.grid.selection', 'ui.grid.grouping']);

app.controller('MyCtrl', function($scope,$http) {
  
   // $http.get('BhandaraScooters.json').success(function (data) {
    
    //});

    $scope.gridOptions = {
       // data: 'persons',

      columnDefs: [
      {field: 'ID', displayName: 'ID'},
      { field: 'Name', displayName: 'Name' },
      { field: 'VehicleType', displayName: 'Vehicle Type' },
      { field: 'BrandName', displayName: 'Brand Name' },
      { field: 'Price', displayName: 'List Price' },
      { field: 'Discount', displayName: 'Discount' },
      ]
    };
    $http.get('BhandaraScooters.json').success(function (res) {
        $scope.gridOptions.data = res;
    });
    //$scope.gridOptions.data = [{ 'name': 'sunny', 'url': 'dfd' },
    //    { 'name': 'suewenny', 'url': 'dfd' },
    //    { 'name': 'seunnwewewey', 'url': 'dfd' },
    //];
});