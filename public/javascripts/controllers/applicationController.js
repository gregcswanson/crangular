function applicationCtrl($scope) {
    $scope.isExpanded = true;
    $scope.expandedClick = function(){
        $scope.isExpanded = !$scope.isExpanded;
    };
}

