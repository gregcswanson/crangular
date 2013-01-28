function ProfileCtrl($scope, $http) {
    $scope.master= { "firstname": "John", "lastname": "Smith", "email": "john.smth@fabrikam.com", "display": "John Smith", "gravatar":"?" };
 
    $scope.update = function(user) {
        $scope.master= angular.copy(user);
    };
 
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };
 
    $scope.reset();
}