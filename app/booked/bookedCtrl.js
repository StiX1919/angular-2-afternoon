angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $stateParams, mainSrvc) {
    mainSrvc.getPackageInfo().then(res => {
        $scope.allPackages = res.data;

        if($stateParams.id){
            $scope.packageIndex = $scope.allPackages.findIndex(package => {
                return package.id === parseInt($stateParams.id)
            });
            if($scope.packageIndex !==-1){
                $scope.package = $scope.allPackages[$scope.packageIndex]
            }
        }
    })
})