var app = angular.module('routing', ['routeStyles','ngRoute',])
    .config( ['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/recipe', {
                templateUrl: 'html/recipe.html',
                animation: 'third',
                css: 'stylesheets/viewRecipe.css'
            })
            .when('/categories', {
                templateUrl: 'html/categories.html',
                animation: 'second',
                css: 'stylesheets/categories.css'
            })
            .when('/start', {
                templateUrl: 'html/chooseRecipe.html',
                animation: 'first',
                css: 'stylesheets/chooseRecipe.css'

            })
            .when('/settings', {
                templateUrl: 'html/settings.html',
                animation: 'third',
                css: 'stylesheets/settings.css'

            })
            .otherwise({
                redirectTo: '/start'
            });
    }]);
