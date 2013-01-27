function ApplicationCtrl($scope) {
    $scope.isExpanded = true;
    $scope.expandedClick = function(){
        $scope.isExpanded = !$scope.isExpanded;
    };
}

function HomeCtrl($scope) {
    $scope.page = "Home";
}