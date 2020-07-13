
var app = angular.module('myApp', []);
    app.controller('myCtrl', function($scope, $http, $log) {
      $http.get("https://raw.githubusercontent.com/ohyland/exersice-files/master/books.json")
      .then(function(response) {
          
          $scope.sortBy = 'Title'; //predefines sort value
          $scope.sortBy = 'Author'; //predefines sort value
          $scope.sortBy = 'Year'; //predefines sort value
          $scope.sortBy = 'Type'; //predefines sort value

          $scope.myBooks = response.data.Books;
          $log.log($scope.myBooks);
          $log.log($scope.myBooks[2]);
          $log.log($scope.myBooks[2].Title);
      });
    });
