var app = angular.module('tiny-angular', [
  //'ngMaterial',
  //'ngAnimate',
  //'ui.bootstrap',
  'ui.router'
]);

app.run(['$rootScope', function($rootScope){

  $rootScope.appName = "Tiny Angular Boilerplate"
  $rootScope.appVer = "1.0";
}]);