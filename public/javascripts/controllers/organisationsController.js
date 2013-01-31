function OrganisationsCtrl($scope, $http) {
    $http.get('api/organisations').success(function(data) {
        $scope.organisations = data;
    });
    $scope.organisations = [];
}