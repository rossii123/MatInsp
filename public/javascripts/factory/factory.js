var factoryApp = angular.module('factory', []);
factoryApp.factory('recipeFactory', function getNewRecipes() {
    var recipes = [
        {
            title: 'Kyckling Burgare',
            ingredients: [{
                amount: '400g',
                ingredient: 'Kyckling'
            }, {
                amount: '1 msk',
                ingredient: 'Salvia'
            }, {
                amount: '1 msk',
                ingredient: 'citron'
            }, {
                amount: '1 tsk',
                ingredient: 'salt'
            }, {
                amount: '2 msk',
                ingredient: 'smör'
            }],
            instructions: [
                {
                    step: 'Blanda alla ingredienserna och forma smeten till 4 eller 5 burgare.'
                },
                {
                    step: 'Hetta upp en stekpanna med smör och stek burgarna på medelstark till svag värme, 4–5 minuter på varje sida.'
                },
                {
                    step: 'Servera med dina favorittillbehör.'
                }
            ],
            imageName: 'kycklingBurger.jpg',
            description: 'En snabblagad och fräsch kycklingburgare som alla i familjen älskar. Receptet är hämtat ur boken Laga mat tillsammans.'
        },
        {
            title: 'Burgare',
            ingredients: [{
                amount: '400g',
                ingredient: 'Kyckling'
            }, {
                amount: '1 msk',
                ingredient: 'Salvia'
            }, {
                amount: '1 msk',
                ingredient: 'citron'
            }, {
                amount: '1 tsk',
                ingredient: 'salt'
            }, {
                amount: '2 msk',
                ingredient: 'smör'
            }],
            instructions: [
                {
                    step: 'Blanda alla ingredienserna och forma smeten till 4 eller 5 burgare.'
                },
                {
                    step: 'Hetta upp en stekpanna med smör och stek burgarna på medelstark till svag värme, 4–5 minuter på varje sida.'
                },
                {
                    step: 'Servera med dina favorittillbehör.'
                }
            ],
            imageName: 'kycklingBurger.jpg',
            description: 'En snabblagad och fräsch kycklingburgare som alla i familjen älskar. Receptet är hämtat ur boken Laga mat tillsammans.'
        },
        {
            title: 'Kyckling',
            ingredients: [{
                amount: '400g',
                ingredient: 'Kyckling'
            }, {
                amount: '1 msk',
                ingredient: 'Salvia'
            }, {
                amount: '1 msk',
                ingredient: 'citron'
            }, {
                amount: '1 tsk',
                ingredient: 'salt'
            }, {
                amount: '2 msk',
                ingredient: 'smör'
            }],
            instructions: [
                {
                    step: 'Blanda alla ingredienserna och forma smeten till 4 eller 5 burgare.'
                },
                {
                    step: 'Hetta upp en stekpanna med smör och stek burgarna på medelstark till svag värme, 4–5 minuter på varje sida.'
                },
                {
                    step: 'Servera med dina favorittillbehör.'
                }
            ],
            imageName: 'kycklingBurger.jpg',
            description: 'En snabblagad och fräsch kycklingburgare som alla i familjen älskar. Receptet är hämtat ur boken Laga mat tillsammans.'
        },
        {
            title: 'Kyckling Burgare',
            ingredients: [{
                amount: '400g',
                ingredient: 'Kyckling'
            }, {
                amount: '1 msk',
                ingredient: 'Salvia'
            }, {
                amount: '1 msk',
                ingredient: 'citron'
            }, {
                amount: '1 tsk',
                ingredient: 'salt'
            }, {
                amount: '2 msk',
                ingredient: 'smör'
            }],
            instructions: [
                {
                    step: 'Blanda alla ingredienserna och forma smeten till 4 eller 5 burgare.'
                },
                {
                    step: 'Hetta upp en stekpanna med smör och stek burgarna på medelstark till svag värme, 4–5 minuter på varje sida.'
                },
                {
                    step: 'Servera med dina favorittillbehör.'
                }
            ],
            imageName: 'kycklingBurger.jpg',
            description: 'En snabblagad och fräsch kycklingburgare som alla i familjen älskar. Receptet är hämtat ur boken Laga mat tillsammans.'
        },
        {
            title: 'Kyckling Burgare',
            ingredients: [{
                amount: '400g',
                ingredient: 'Kyckling'
            }, {
                amount: '1 msk',
                ingredient: 'Salvia'
            }, {
                amount: '1 msk',
                ingredient: 'citron'
            }, {
                amount: '1 tsk',
                ingredient: 'salt'
            }, {
                amount: '2 msk',
                ingredient: 'smör'
            }],
            instructions: [
                {
                    step: 'Blanda alla ingredienserna och forma smeten till 4 eller 5 burgare.'
                },
                {
                    step: 'Hetta upp en stekpanna med smör och stek burgarna på medelstark till svag värme, 4–5 minuter på varje sida.'
                },
                {
                    step: 'Servera med dina favorittillbehör.'
                }
            ],
            imageName: 'kycklingBurger.jpg',
            description: 'En snabblagad och fräsch kycklingburgare som alla i familjen älskar. Receptet är hämtat ur boken Laga mat tillsammans.'
        }
    ];
    var index=0;
    var getOneRecipe = function() {
        index++;
        console.log(index);
        return recipes[index-1];
    };
    return getOneRecipe();
});

