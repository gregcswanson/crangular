angular.module('crangular', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/home', {templateUrl: 'partials/home.html',   controller: HomeCtrl}).
      when('/organisations', {templateUrl: 'partials/organisations.html', controller: OrganisationsCtrl}).
      otherwise({redirectTo: '/home'});
}]);