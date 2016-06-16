$(document).ready(function() {
    findingDory.init();
})

var findingDory = {
    url: "http://tiny-tiny.herokuapp.com/collections/findingDory",
    characterArr: [],
    userChoice: null,
    userChoiceAbilites: null,
    userChoiceVals: null,
    init: function() {
        findingDory.styling();
        findingDory.events();
    },
    styling: function() {
        // findingDori.getCharacter();
    },
    events: function() {

        // bruce
        $('.brucepic').on('click', function() {
            event.preventDefault();
            console.log("you clicked bruce's name");
            var stringIClicked = $(this).text()
            var heroNameFromObject = CharacaterChoices[stringIClicked];
            findingDory.setUserChoices(heroNameFromObject);
            $('.encounters').removeClass('hidden');
            $('.characterselect').addClass('hidden');
            $('.seaweed').addClass('hidden');
            $('.current').addClass('hidden');
            // $('.abilities').removeClass('hidden');

            findingDory.userChoiceVals.forEach(function(element, index) {
                $('ul').append(`<a class="ability${index + 1}" href="#"><li>${element}</li></a>`);
            })


        });
        $('.treasurechest ul').on('click', 'a', function() {
            console.log($(this).attr('class'))
            if ($(this).attr('class') === 'ability1') {
                $('ul').addClass('hidden');
                $('.seaweed').removeClass('hidden');
                $('.treasurechest').addClass('hidden');
                // $('.treasurepic').removeClass('hidden');

            }
        });


        $('.seaweed').on('click', function() {
            $('ul').removeClass('hidden');
        });
        $('.seaweed ul').on('click', 'a', function() {
            console.log($(this).attr('class'))
            if ($(this).attr('class') === 'ability2') {
                $('ul').addClass('hidden');
                $('.current').removeClass('hidden');
                $('.seaweed').addClass('hidden');
                // $('.seaweedpic').removeClass('hidden');
              }
        });

        $('.current').on('click', function() {
            $('ul').removeClass('hidden');
        });
        $('.current ul').on('click', 'a', function() {
            console.log($(this).attr('class'))
            if ($(this).attr('class') === 'ability3') {
                $('ul').addClass('hidden');
                $('.current').addClass('hidden');
                $('.treasurechest').addClass('hidden');
                $('.win').removeClass('hidden');
                // $('.wavepic').removeClass('hidden');

              }
        });





        // Squirt
        $('.squirtpic').on('click', function() {
            event.preventDefault();
            console.log("you clicked bruce's name");
            var stringIClicked = $(this).text()
            var heroNameFromObject = CharacaterChoices[stringIClicked];
            findingDory.setUserChoices(heroNameFromObject);
            $('.encounters').removeClass('hidden');
            $('.characterselect').addClass('hidden');
            $('.seaweed').addClass('hidden');
            $('.current').addClass('hidden');
            $('.abilities').removeClass('hidden');

            findingDory.userChoiceVals.forEach(function(element, index) {
                $('ul').append(`<a class="ability${index + 1}" href="#"><li>${element}</li></a>`);
            })

        });
        // Bloat
        $('.bloatpic').on('click', function() {
            event.preventDefault();
            console.log("you clicked bruce's name");
            var stringIClicked = $(this).text()
            var heroNameFromObject = CharacaterChoices[stringIClicked];
            findingDory.setUserChoices(heroNameFromObject);
            $('.encounters').removeClass('hidden');
            $('.characterselect').addClass('hidden');
            $('.seaweed').addClass('hidden');
            $('.current').addClass('hidden');
            $('.abilities').removeClass('hidden');

            findingDory.userChoiceVals.forEach(function(element, index) {
                $('ul').append(`<a class="ability${index + 1}" href="#"><li>${element}</li></a>`);
            })

        });

    },

    setUserChoices(heroName) {
        findingDory.userChoice = heroName;
        findingDory.userChoiceAbilites = Object.keys(findingDory.userChoice).splice(1, 4);
        findingDory.userChoiceVals = findingDory.userChoiceAbilites.map(function(element) {
            return findingDory.userChoice[element]
        });
    }
}
