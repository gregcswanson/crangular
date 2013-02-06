function OrganisationsCtrl($scope, $http) {
    $http.get('api/organisations').success(function(data) {
        $scope.organisations = data;
    });
    $scope.organisations = [];
}

function OrganisationCtrl($scope, $http, $routeParams) {
    $scope.id = $routeParams.organisationId;
}  

function OrganisationUsersCtrl($scope, $http, $routeParams) {
    $scope.id = $routeParams.organisationId;
}  