function ApplicationCtrl($scope) {
    $scope.isExpanded = true;
    $scope.expandedClick = function(){
        $scope.isExpanded = !$scope.isExpanded;
    };
}

function HomeCtrl($scope) {
    $scope.page = "Home";
}

function MenuCtrl($scope) {
    $scope.isExpanded = false;
    $scope.label = "hide menu";
    $scope.expandedClick = function(){
        $scope.isExpanded = !$scope.isExpanded;
        if($scope.isExpanded){
            $scope.label = "hide menu";
        }else{
            $scope.label = "show menu";
        }
    };
}

function AboutCtrl($scope) {
    
}

function AboutContactCtrl($scope) {
    
}