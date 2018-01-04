cricApp.controller('homeController', ['$scope', 'cricdata', function($scope, cricdata) {
    this.questions = cricdata;

    $scope.selectedOption = new Array(this.questions.length);

    this.submit = function(Anslist) {
        var wrong = 0;
        $scope.wrongStyle = {
            "height": wrong + "px"
        };
        var right = 0;
        $scope.rightStyle = {
            "height": right + "px"
        };
        angular.forEach(cricdata, function(correctAns, index) {
            if (correctAns.answer === Anslist[index]) {
                right = right + 75;
                if (wrong < 0) {
                    wrong = 0;
                    wrong = wrong - 75;
                }

                $scope.rightStyle = {
                    "height": right + "px"
                };
                $scope.wrongStyle = {
                    "height": wrong + "px"
                };
            } else {
                if (right < 0) {
                    right = 0;
                    right = right - 75;
                }
                wrong = wrong + 75;

                $scope.rightStyle = {
                    "height": right + "px"
                };
                $scope.wrongStyle = {
                    "height": wrong + "px"
                };
            }
        });
    };
    this.clearform = function(Anslist) {
        Anslist.length = 0;
        var wrong = 0;
        $scope.wrongStyle = {
            "height": wrong + "px"
        };
        var right = 0;
        $scope.rightStyle = {
            "height": right + "px"
        };
    };
}]);