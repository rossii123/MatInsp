var foodSite = angular.module('foodSite', ['servicesApp','routing','controller','slickCarousel','ui-rangeSlider','ui.bootstrap']);
foodSite.controller("flipperDemo", function($scope) {
    $scope.flipped = false;

    $scope.flip = function() {
        $scope.flipped = !$scope.flipped;
    };
});

foodSite.directive("flipper", function() {
    return {
        restrict: "E",
        template: "<div class='flipper' ng-transclude ng-class='{ flipped: flipped }'></div>",
        transclude: true,
        scope: {
            flipped: "="
        }
    }
    });


