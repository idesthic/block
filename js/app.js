var app = angular.module("myApp", []);
let date = new Date().getFullYear();

app.controller('MainController', ['$scope', function($scope) {
  $scope.title = "Block.";
  $scope.missionheading = "Our mission";
  $scope.missiontext = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec arcu non dui eleifend tristique. Aliquam malesuada pharetra fringilla. Sed mollis ante ut velit molestie euismod. Aenean egestas quam ac facilisis porta. Ut vel pretium magna. Sed pharetra, dui sed sodales sagittis, sem lorem fringilla quam, rhoncus malesuada sapien enim ac arcu.";
  $scope.productsheading = "Our products";
  $scope.productstext = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec arcu non dui eleifend tristique. Aliquam malesuada pharetra fringilla. Sed mollis ante ut velit molestie euismod. Aenean egestas quam ac facilisis porta. Ut vel pretium magna. Sed pharetra, dui sed sodales sagittis, sem lorem fringilla quam, rhoncus malesuada sapien enim ac arcu.";
  $scope.productsnum = "300+";
  $scope.employeesnum = "1,603";
  $scope.customersnum = "10,000+";
  $scope.companyRep = "Name";
  $scope.companyEmail = "contact@block.com";
  $scope.companyAddress = "Street Name";
  $scope.companyPhone = "(+385) 1 1234 567";
  $scope.year = date;
}]);
