// define module using the `angular.module` function
// the [] parameter can be used to define dependent modules
// without the [] parameter, we are not creating a new module, but retrieving an existing one
var app = angular.module('myApp', []);

app.controller('myControl', ['$scope', function ($scope) {

}]);

// create my own directive
// the HTML element will use this directive's name as its tag name
app.directive('myDirective', function () {
  return {
    restrict: "EACM",
    template: '<p>Made by my directive!</p>'
  };
});