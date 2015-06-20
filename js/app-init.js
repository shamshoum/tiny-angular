/*
* Tiny-Angular
*
* A simple angular boilerplate for very basic usage scenarios
*
* Author: Yousef Shamshoum
* Email: shamshoumyousef@gmail.com
*
*/


var app = angular.module('tiny-angular', [
  //'ngMaterial',
  //'ngAnimate',
  //'ui.bootstrap',
  'ui.router'
]);

app.run(['$rootScope', function($rootScope){

  // Defines app title and version
  $rootScope.appName = "Tiny Angular Boilerplate";
  $rootScope.appVer = "1.0";

}]);