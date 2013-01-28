angular.module('crangular', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/home', {templateUrl: 'partials/home.html',   controller: HomeCtrl}).
      when('/organisations', {templateUrl: 'partials/organisations.html', controller: OrganisationsCtrl}).
      when('/profile', {templateUrl: 'partials/profile.html', controller: ProfileCtrl}).
      otherwise({redirectTo: '/home'});
}]);