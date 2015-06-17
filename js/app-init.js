var app = angular.module('tiny-angular', ['ngMaterial', 'ngMdIcons', 'ngAnimate', 'ui.router', 'googlechart', 'ngMessages']);

app.run(['$rootScope', function($rootScope){

  $rootScope.appName = "Tiny Angular Boilerplate"
  $rootScope.appVer = "1.0";
}]);