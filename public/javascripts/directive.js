var app = angular.module('directive', []);

app.directive("navigationMenu", function() {
    return {
        restrict: 'E',
        templateUrl: "html/navigationMenu.html"
    };
});

app.directive("categoriesImages", function () {
    return {
        restrict: 'E',
        templateUrl: "html/categoriesImages.html"
    };
});
app.directive("selectedCategories", function () {
    return {
        restrict: 'E',
        templateUrl: "html/selectedCategories.html"
    };
});
