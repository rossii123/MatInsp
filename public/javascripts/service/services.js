var app = angular.module('servicesApp', ['factory']);

app.service('ImageService', function () {

    // private
    var categoryImagesArray = [
        {
            name: 'Sweden',
            category: 'Country',
            imageUrl: 'sweden.jpeg'
        }, {
            name: 'India',
            category: 'Country',
            imageUrl: 'india.png'
        }, {
            name: 'italy',
            category: 'Country',
            imageUrl: 'italy.png'
        }, {
            name: 'spain',
            category: 'Country',
            imageUrl: 'spain.jpeg'
        }, {
            name: 'france',
            category: 'Country',
            imageUrl: 'france.png'
        }, {
            name: 'USA',
            category: 'Country',
            imageUrl: 'USA.png'
        }, {
            name: 'mexico',
            category: 'Country',
            imageUrl: 'mexico.png'
        }, {
            name: 'china',
            category: 'Country',
            imageUrl: 'china.png'
        }, {
            name: 'abbore',
            category: 'Fish',
            imageUrl: 'abbore.jpeg'
        }, {
            name: 'gravadLax',
            category: 'Fish',
            imageUrl: 'gravadLax.jpeg'
        }, {
            name: 'laxFile',
            category: 'Fish',
            imageUrl: 'laxFile.jpeg'
        }, {
            name: 'Sjötunga',
            category: 'Fish',
            imageUrl: 'sjotunga.jpg'
        }, {
            name: 'ströming',
            category: 'Fish',
            imageUrl: 'stroming.jpeg'
        }, {
            name: 'torskFile',
            category: 'Fish',
            imageUrl: 'torskFile.jpeg'
        }, {
            name: 'fleskfile',
            category: 'Meat',
            imageUrl: 'fleskfile.jpeg'
        }, {
            name: 'lamBiff',
            category: 'Meat',
            imageUrl: 'lamBiff.jpeg'
        }, {
            name: 'lamfile',
            category: 'Meat',
            imageUrl: 'lamfile.jpg'
        }, {
            name: 'lamracks',
            category: 'Meat',
            imageUrl: 'lamracks.jpeg'
        }, {
            name: 'oxfile',
            category: 'Meat',
            imageUrl: 'oxfile.jpeg'
        },{
            name: 'Kötfärs',
            category: 'Meat',
            imageUrl: 'kottfars.jpg'
        }];
    this.setCategoryImageSelected = function (image) {

        for (var i = 0, len = categoryImagesArray.length; i < len; i++) {
            if (categoryImagesArray[i].name === image.name) {
                if (categoryImagesArray[i].selected === true) {
                    categoryImagesArray[i].selected = false;
                } else {
                    categoryImagesArray[i].selected = true;
                }

            }
        }
    };
    this.getCategoryImages = function () {
        return categoryImagesArray;
    };

    this.getImagesByCategory = function () {
        var newSortCategoryArray = [];
        for (var i = 0, len = categoryImagesArray.length; i < len; i++) {
            var exist = false;
            var j = 0;
            while (j < newSortCategoryArray.length) {
                if (newSortCategoryArray[j].category === categoryImagesArray[i].category) {
                    newSortCategoryArray[j].images.push(categoryImagesArray[i]);
                    exist = true;
                }
                j++;
            }
            if (!exist) {
                newSortCategoryArray[j] = {};
                newSortCategoryArray[j].category = categoryImagesArray[i].category;
                newSortCategoryArray[j].images = [];
                newSortCategoryArray[j].images.push(categoryImagesArray[i])
            }
        }
        return [].concat(newSortCategoryArray);
    };

});

app.service('viewRecipeService', function () {
    var recipe={};
    this.setRecipeToView= function(newRecipe){
        recipe = newRecipe;
    };
    this.getRecipeToView= function(){
        return recipe;
    };
});

app.service('chooseRecipeService', function () {
    var numberOfRecipesToChooseFrom = 3;
    var index = 0;
    var recipesToChooseFrom = [];
    this.getRecipesToChooseFrom = function () {
        if (recipesToChooseFrom.length <= 0) {
            for (var i = 0, len = numberOfRecipesToChooseFrom; i < len; i++) {
                recipesToChooseFrom.push(recipes[index]);
                index++;
            }
        }
        return recipesToChooseFrom;
    };
    this.setNewRecipe= function(recipe){
        for (var i = 0, len = recipesToChooseFrom.length; i < len; i++) {
            if (recipesToChooseFrom[i].title === recipe.title){
                recipesToChooseFrom[i] = recipes[index];
            index++;
            }
        }
    };
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
        title: 'Vegetarisk pasta',
        ingredients: [{
            amount: '500 gram',
            ingredient: 'pasta, pappardelle eller tagliatelle'
        }, {
            amount: '3 msk',
            ingredient: 'olivolja'
        }, {
            amount: '1 st',
            ingredient: 'vitlöksklyfta'
        }, {
            amount: '10 st ',
            ingredient: 'mogna körsbärstomater'
        }, {
            amount: '1 st',
            ingredient: 'torkad röd chili'
        }, {
            amount: '1 st',
            ingredient: 'torkad röd chili'
        }, {
            amount: '4 st',
            ingredient: 'babyzuccinis'
        }, {
            amount: '0,5 st',
            ingredient: 'citron'
        }, {
            amount: '1 msk',
            ingredient: 'balsamicovinäger'
        }],
        instructions: [
            {
                step: 'Sätt ugnen på 225 grader. Skiva tomaterna, vitlöken och basilikan. Skär babyzucchinin i längder och hacka de färska örterna. Bred ut allt i ett ugnssäkert fat. '
            }, {
                step: 'Ringla två matskedar av olivoljan över grönsakerna. Pressa den halva citronen, sila bort kärnorna och häll saften över grönsakerna. Smaka även av med några droppar balsamicovinäger och salta'
            },{
                step: 'Häll bort vattnet från den inlagda kronärtskockorna. Placera dem och den torkade röda chilin över grönsakerna. Salta och peppra. Rosta grönsakerna i ca 15 min. '
            },{
                step: 'Häll upp rikligt med vatten i en kastrull. Koka pastan tills den är al dente. '
            },{
                step: 'Gör basilikaskummet under tiden: Strimla vårlöken fint. Mixa youghurten och crème fraîchen med vårlök och basilika med stavmixer tills det blir en puré. Tillsätt lättmjölken och mineralvattnet och mixa till ett sprudlande skum. Krydda med havssalt och peppar.'
            }

        ],
        imageName: 'vegetariskPasta.jpg',
        description: 'En snabblagad och fräsch kycklingburgare som alla i familjen älskar. Receptet är hämtat ur boken Laga mat tillsammans.'
    }, {
        title: 'Vegetarisk gourmetlasagne',
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
        imageName: 'VegetariskGourmetlasagne.jpg',
        description: 'Precis som det italienska originalet blir den här lasagnen bara godare av att stå till sig och sedan värmas upp på nytt, så laga den gärna en dag i förväg. Grönsakssåsen blir härligt smakrik med fint hackade grönsaker och en olivolja av hög kvalitet. Ostsåsen ska vara tjock och krämig – här duger inga viktväktaralternativ.'
    }, {
        title: 'Senaps- och dillsmaksatt potatis med \n pepparrökt lax',
        ingredients: [{
            amount: '240 g',
            ingredient: 'färskrökt lax'
        }, {
            amount: '1 tsk',
            ingredient: 'svartpeppar'
        }, {
            amount: '1 tsk',
            ingredient: 'rosépeppar'
        }, {
            amount: '1 tsk',
            ingredient: 'vitpeppar'
        }, {
            amount: '8 st',
            ingredient: 'kokta, skalade potatisar'
        },{
            amount: '100 g',
            ingredient: 'sockerärter'
        },{
            amount: '60 g',
            ingredient: 'skånsk senap'
        },{
            amount: '2 tsk',
            ingredient: 'socker'
        },{
            amount: '16 g',
            ingredient: 'skuren dill'
        },{
            amount: '40 g',
            ingredient: 'majonnäs'
        },{
            amount: '16 g',
            ingredient: 'skuren dill'
        },{
            amount: '1 st',
            ingredient: 'hackad rödlök'
        },{
            amount: '2 msk',
            ingredient: 'crème fraîche'
        }],
        instructions: [
            {
                step: 'Bena eventuellt ur laxen. Krydda den med olika typer av peppar efter smak. Använd gärna en kvarn och tryck in kryddorna med handflatan i laxen.'
            },
            {
                step: 'Skär potatisen i centimeterstora skivor. Koka upp en kastrull med lättsaltat vatten och koka sockerärterna lätt, låt sedan svalna.'
            },
            {
                step: 'Blanda skånsk senap, socker, dill, majonnäs, rödlök och crème fraîche i en stor skål. Smaka av blandningen med salt och peppar. Vänd ner potatisskivorna och sockerärterna i blandningen.'
            },
            {
                step: 'Vänd potatisskivorna och sockerärterna i blandningen. Lägg skivad pepparrökt lax på den senaps- och dillsmaksatta potatisen och servera. '
            }


        ],
        imageName: 'senaps-och-dillsmaksatt-potatis-med-pepparrokt-lax.jpg',
        description:'En god och riktigt snabb rätt som fungerar både som huvudrätt för 4 personer eller som förrätt för 8-10.'
    },
    {
        title: 'Älgköttbullar med gräddsås och syltade kantareller',
        ingredients: [{
            amount: '',
            ingredient: ''
        },{
            amount: '500 g',
            ingredient: 'älgfärs'
        },{
            amount: '1 skiva',
            ingredient: 'ljust bröd'
        },{
            amount: '1',
            ingredient: 'ägg'
        },{
            amount: 'ca 1,5 dl',
            ingredient: 'mjölk'
        },{
            amount: '1',
            ingredient: 'liten gul lök,riven'
        },{
            amount: '2',
            ingredient: 'anjovisfileér + lite spad'
        },{
            amount: '2 msk ',
            ingredient: 'grov stark senap'
        },{
            amount: '',
            ingredient: 'salt'
        },{
            amount: '',
            ingredient: 'vitpeppar'
        },{
            amount: '',
            ingredient: 'smör och olja, till stekning'
        }],
        instructions: [
            {
                step: 'Blanda ägg och mjölk i en skål, lägg i brödet rivet i grova bitar så att det suger åt sig vätskan.'
            },{
                step: 'Tillsätt älgfärsen, senap, riven gul lök, anjovis, lite anjovisspad, salta, peppra och blanda till en jämn smet. Låt gärna stå att dra åt sig smakerna i kyl i 15-20 minuter innan ni rullar bullar'
            },{
                step: 'Sätt under tiden på potatisen på spisen och koka i hårt saltat vatten tills de är mjuka, behåll skalet på vid servering och låt gästerna skala själva (det blir tid att sitta och snacka under tiden då). '
            },{
                step: 'Fukta händerna och forma färsen till köttbullar. Stek dem i smör och olja i en panna tills de blir gyllenbruna och saftiga. det tar cirka 8-10 minuter i varje omgång, stek inte alla på en gång utan låt dem ta plats i pannan… '
            }

        ],
        imageName:'algkottbullar-med-graddsas-och-syltade-kantareller-2.jpg',
        description:'Biffar på älgfärs, en smakrik och krämig gräddsås och syltade kantareller. Serveras med mandelpotatis, gärna med skalet kvar.Tips! Förvara de syltade kantarellerna i kyl. Svampen håller upp till 3 månader i oöppnad förpackning. '
    },
    {
        title: 'Japansk omelett ”okonomiyaki”',
        ingredients: [{
            amount: '4.5 dl',
            ingredient: 'mjöl'
        },{
            amount: '3 dl',
            ingredient: 'mjölk'
        },{
            amount: '3 ',
            ingredient: 'ägg'
        },{
            amount: '1,5 tsk',
            ingredient: 'salt'
        },{
            amount: '5 dl',
            ingredient: 'spetskål'
        },{
            amount: '250 g',
            ingredient: 'rökt sidfläsk'
        },{
            amount: '2 dl',
            ingredient: 'soja'
        },{
            amount: '2 msk',
            ingredient: 'hoisionsås'
        },{
            amount: '1 msk',
            ingredient: 'sesamolja'
        },{
            amount: '1 msk',
            ingredient: 'socker'
        }],
        instructions: [
            {
                step: 'Blanda mjöl, mjölk, ägg och tillsätt sedan salt till omelettsmeten.'
            },{
                step: 'Vispa sedan ihop marinaden till fläsket, alltså – soja, hoisin, sesamolja, socker.'
            },{
                step: 'Skär fläsket i bitar och pensla med sojamarinaden.'
            },{
                step: 'Strimla kålen tunt och värm sedan en panna till stekning. '
            },{
                step: 'Börja med att steka fläsket, värm sedan stekpannan igen och tillsätt lite matolja, häll i smeten och lägg på kålen och fläskbitarna, baka sedan omeletten klar i pannan.'
            },{
                step: 'Servera med lite majonnäs, shichimi togarashi och sojamarinaden.'
            }

        ],
        imageName:'japansk-omelett-okonomiyaki.jpg',
        description:''
    },
    {
        title: 'Tacopaj',
        ingredients: [{
            amount: '2 dl',
            ingredient: 'vetemjöl'
        },{
            amount: '100 g',
            ingredient: 'smör margarin'
        },{
            amount: '2 msk',
            ingredient: 'vatten'
        },{
            amount: '400 g',
            ingredient: 'köttfärs'
        },{
            amount: '1 påse',
            ingredient: 'taco kryddmix'
        },{
            amount: '1,5 dl',
            ingredient: 'vatten'
        },{
            amount: '1 burk',
            ingredient: 'crème fraiche paprika & chili'
        },{
            amount: '3 st',
            ingredient: 'tomater'
        },{
            amount: '2,5 dl',
            ingredient: 'riven ost, gärna cheddar'
        }],
        instructions: [
            {
                step: 'Sätt ugnen på 225 grader. '
            },{
                step: 'Blanda mjöl och smör till en grynig massa. Tillsätt vattnet och arbeta snabbt ihop degen. Lägg degen i lite plast och låt den vila kallt en stund'
            },{
                step: 'Smörj en pajform. Tryck ut degen i formen och förgrädda pajskalet i cirka 10 minuter. '
            },{
                step: 'Bryn köttfärs i en stekpanna med lite smör. Tillsätt tacokrydda och vatten och blanda om. '
            },{
                step: 'Låt färsen puttra på svag värme 10-15 minuter eller tills vattnet kokat in. Rör om då och då. Blanda ner chilin. '
            },{
                step: 'Fyll pajskalet med köttfärsen och bred över crème fraiche. Skiva tomaterna och lägg dem ovanpå. Strö över osten. '
            },{
                step: 'Grädda pajen 10-15 minuter tills osten fått en gyllenbrun färg. '
            },{
                step: 'Servera din tacopaj med en god sallad.'
            }

        ],
        imageName:'tacopaj.jpg',
        description:'Tacopaj, en underbart god paj med tacokryddad köttfärs under ett täcke av tomat och crème fraiche!'
    },
    {
        title: 'kookoo',
        ingredients: [{
            amount: '1 dl',
            ingredient: 'gräslök'
        },{
            amount: '1 dl',
            ingredient: 'persilja'
        },{amount: '1 dl',
            ingredient: 'dill'
        },{
            amount: '1 dl',
            ingredient: 'koriander'
        },{
            amount: '4',
            ingredient: 'ägg'
        },{
            amount: '3 msk',
            ingredient: 'olivolja'
        },{
            amount: '1',
            ingredient: 'stor potatis'
        },{
            amount: '',
            ingredient: 'salt och peppar'
        }],
        instructions: [
            {
                step: 'Blanda allt till en smet och stek sedan på svag värme i 20 minuter under lock.'
            },{
                step: 'Välj själv om du vill steka det som biffar, eller som en hel pannkaka. Vänd efter ca 14 min, om du väljer pannkaka.'
            },{
                step: 'Servera med osötat bröd, ex pitabröd, sesambröd eller toastbröd.'
            }

        ],
        imageName:'kookoo.jpg',
        description:'En örtig omelett som serveras med en yoghurtsås och bröd.'
    },
    {
        title: 'tacos med tempurafriterad flundra',
        ingredients: [{
            amount: '0,25 pkt ',
            ingredient: 'jäst'
        },{
            amount: '2,5 dl',
            ingredient: 'vatten'
        },{
            amount: '0,5 tsk',
            ingredient: 'salt'
        },{
            amount: '1 st',
            ingredient: 'vitkål huvud, eller ett halvt huvud \n sommarkål'
        },{
            amount: '1 msk',
            ingredient: 'citron'
        },{
            amount: '0,5 krm',
            ingredient: 'peppar'
        },{
            amount: '1 st  ',
            ingredient: 'vitlöksklyfta'
        }],
        instructions: [
            {
                step: 'Skär kålen mycket tunt och blanda med plockad dill.'
            },{
                step: 'Pressa över citron och smaka av med olja, riven vitlök, salt och peppar'
            },{
                step: 'Grovskär örterna, skiva vitlöken tunt, hacka sardellerna. '
            },{
                step: 'Blanda allt i en skål tillsammans med limeskalet.'
            },{
                step: 'Blanda allt i en skål tillsammans med limeskalet.'
            },{
                step: 'Mätta med oljan, cirka 0.75 dl. '
            },
            {
                step: 'Dra lite med svartpepparkvarnen över och smaksätt eventuellt med lite mer salt.'
            }


        ],
        imageName:'tacos-med-tempurafriterad-flundra.jpg',
        description:'Den här fantastiska varianten av fisktacos serveras med en tunt skuren sommarkål och salsa verde.'
    }
];
})
;