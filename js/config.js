app.config(['$urlRouterProvider', '$stateProvider',  function($urlRouterProvider, $stateProvider) {

  // For any unmatched url, redirect to /main
  $urlRouterProvider.otherwise("/main");

  // Now set up the states
  $stateProvider
    .state('main', {
      url: "/main",
      templateUrl: "views/mainpage.html",
      controller: 'mainPageCtrl'
    })

}]);