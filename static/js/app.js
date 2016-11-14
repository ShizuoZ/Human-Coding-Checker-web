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
      // $locationProvider.html5Mode(true);
});

app.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
});

app.directive('fileReader', function() {
  return {
    scope: {
      fileReader:"="
    },
    link: function(scope, element) {
      $(element).on('change', function(changeEvent) {
        var files = changeEvent.target.files;
        console.log(""+files);
        if (files.length) {
          var r = new FileReader();
          r.onload = function(e) {
            var contents = e.target.result;
            var lines = contents.split("\n");
            var result = [];
            var headers = lines[0].trim().split(",");
            for (var i = 1; i < lines.length; i++) {
              var obj = {};
              var currentline = lines[i].split(",");
              for (var j = 0; j < headers.length-1; j++) {
                obj[headers[j]] = currentline[j];
              }
              result.push(obj);
            }
            scope.$apply(function () {
              scope.fileReader = result;
            });
          };
          r.readAsText(files[0]);
        }
      });
    }
  };
});