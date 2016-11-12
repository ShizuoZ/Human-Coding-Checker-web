/**
 * Created by edward on 11/11/16.
 */
var app = angular.module('MyApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    //$locationProvider.hashPrefix('!');
    $routeProvider.
      when("/", {
        templateUrl: "/static/partials/main.html",
        controller: "MainCtrl"
      }). otherwise( { redirectTo: "/" });

      // use the HTML5Mode History API
      $locationProvider.html5Mode(true);
});

app.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
});

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
});

app.directive('fileReader', function() {
  return {
    scope: {
      fileReader:"="
    },
    link: function(scope, element) {
      $(element).on('change', function(changeEvent) {
        var files = changeEvent.target.files;
        if (files.length) {
          var r = new FileReader();
          r.onload = function(e) {
              var contents = e.target.result;
              scope.$apply(function () {
                scope.fileReader = contents;
              });
          };

          r.readAsText(files[0]);
        }
      });
    }
  };
});