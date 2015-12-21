var app = angular.module('controller', ['directive']);

app.controller('imageCtrl', function ($scope, ImageService) {
    $scope.setCategoryImageSelected = function (image) {
        ImageService.setCategoryImageSelected(image);
    };
    $scope.getImagesByCategory = function () {
        console.log(ImageService);
        var images = ImageService.getImagesByCategory();
        console.log(images)
        return images;
    };
});


app.controller('selectedImagesCtrl', function ($scope, ImageService) {
    $scope.setCategoryImageSelected = function (image) {
        ImageService.setCategoryImageSelected(image);
    };
    $scope.getImages = function () {
        return ImageService.getCategoryImages();
    };

});

app.controller('chooseRecipeCtrl', function ($scope, chooseRecipeService,viewRecipeService,$location) {

    $scope.getRecipesToChooseFrom = function(){
        console.log(chooseRecipeService.getRecipesToChooseFrom());
        return chooseRecipeService.getRecipesToChooseFrom();
    };
    $scope.dontLikeRecipe = function(recipe){
        chooseRecipeService.setNewRecipe(recipe);
    };
    $scope.likeRecipe = function(recipe){
        chooseRecipeService.setNewRecipe(recipe);
    };
    $scope.closeRecipe = function(recipe){
        chooseRecipeService.setNewRecipe(recipe);
    };
    $scope.setRecipe = function(recipe){
        chooseRecipeService.setNewRecipe(recipe);
    };
    $scope.viewRecipe = function(recipe){
        viewRecipeService.setRecipeToView(recipe);
        $location.path("/recipe");
    };

});
app.controller('settingsCtrl', function ($scope) {
    $scope.demo1 = {
        min: 20,
        max: 80
    };

});
app.controller('recipeCtrl', function ($scope,viewRecipeService) {
    $scope.getRecipe = function(){
        return viewRecipeService.getRecipeToView();
    }
});
app.controller('recipeCtrl', function ($scope,viewRecipeService) {
    $scope.getRecipe = function(){
        return viewRecipeService.getRecipeToView();
    }
});


