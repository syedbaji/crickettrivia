cricApp.controller('homeController', ['$scope', 'cricdata', function($scope, cricdata) {
    this.questions = cricdata;

    $scope.selectedOption = new Array(this.questions.length);

    this.submit = function(list) {
        var wrong = 0;
        $scope.wrongStyle = {
            "height": wrong + "px"
        };
        var right = 0;
        $scope.rightStyle = {
            "height": right + "px"
        };
        angular.forEach(cricdata, function(correctAns, index) {
            if (correctAns.answer === list[index]) {
                right = right + 10;
                $scope.rightStyle = {
                    "height": right + "px"
                };


                wrong = wrong - 10;
                $scope.wrongStyle = {
                    "height": wrong + "px"
                };
            } else {
                wrong = wrong + 10;
                $scope.wrongStyle = {
                    "height": wrong + "px"
                };


                right = right - 10;
                $scope.rightStyle = {
                    "height": right + "px"
                };
            }
        });
    };
}]);