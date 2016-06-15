$(document).ready(function() {
    findingDory.init();
})

var findingDory = {
    url: "http://tiny-tiny.herokuapp.com/collections/findingDory",
    characterArr: [],
    userChoice: null,
    userChoiceAbilites: null,
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
        });
        // Squirt
        $('.squirtpic').on('click', function() {
            event.preventDefault();
            console.log("you clicked squirts's name");
            var stringIClicked = $(this).text()
            var heroNameFromObject = CharacaterChoices[stringIClicked];
            findingDory.setUserChoices(heroNameFromObject);
            $('.encounters').removeClass('hidden');
            $('.characterselect').addClass('hidden');
        });
        // Bloat
        $('.bloatpic').on('click', function() {
            event.preventDefault();
            console.log("you clicked bloat's name");
            var stringIClicked = $(this).text()
            var heroNameFromObject = CharacaterChoices[stringIClicked];
            findingDory.setUserChoices(heroNameFromObject);
            $('.encounters').removeClass('hidden');
            $('.characterselect').addClass('hidden');
        });
        $('.treasurechest').on('click', function() {
            event.preventDefault();
            console.log("you clicked the treasure chest");
            $('.abilities').removeClass('hidden').addClass('active');
            $('.seaweed').addClass('hidden');
            $('.current').addClass('hidden');
            $('.bruceability3').addClass('hidden');
            $('.bruceability2').addClass('hidden');
            $('.squirtability3').addClass('hidden');
            $('.squirtability2').addClass('hidden');
            $('.bloatability3').addClass('hidden');
            $('.bloatability2').addClass('hidden');
        });
        $('.seaweed').on('click', function() {
            event.preventDefault();
            console.log("you clicked the seaweed");
            $('.abilities').removeClass('hidden').addClass('active');
            $('.treasurechest').addClass('hidden');
            $('.current').addClass('hidden');
            $('.bruceability3').addClass('hidden');
            $('.bruceability1').addClass('hidden');
            $('.squirtability3').addClass('hidden');
            $('.squirtability1').addClass('hidden');
            $('.bloatability3').addClass('hidden');
            $('.bloatability1').addClass('hidden');
        });
        $('.current').on('click', function() {
            event.preventDefault();
            console.log("you clicked the seaweed");
            $('.abilities').removeClass('hidden').addClass('active');
            $('.treasurechest').addClass('hidden');
            $('.seaweed').addClass('hidden');
            $('.bruceability2').addClass('hidden');
            $('.bruceability1').addClass('hidden');
            $('.squirtability2').addClass('hidden');
            $('.squirtability1').addClass('hidden');
            $('.bloatability2').addClass('hidden');
            $('.bloatability1').addClass('hidden');
        });
        $('.bruceability1').on('click', function() {
            console.log(this);
        });
    },

    setUserChoices(heroName) {
        findingDory.userChoice = heroName;
        findingDory.userChoiceAbilites = Object.keys(findingDory.userChoice).splice(1, 4);
    }
}

// createCharacter: function(whateverYouWantToGiveMe) {
//     $.ajax({
//         url: findingDory.url,
//         method: 'POST',
//         data: whateverYouWantToGiveMe,
//         success: function(data) {
//             console.log('success!', data);
//         },
//         error: function() {
//             console.log('error', err);
//         }
//     })
// },
//     readCharacter: function() {
//         $.ajax({
//             url: findingDory.url,
//             method: 'GET',
//             success: function(data) {
//                 console.log('you got it!', data);
//             },
//             error: function() {
//                 console.log('error', err);
//             }
//         })
//     },
//     updateCharacter: function(data) {
//         $.ajax({
//             url: findingDory.url,
//             method: 'PUT',
//             data: data,
//             success: function(data) {
//                 console.log('you changed it!', data);
//             },
//             error: function(err) {
//                 console.log('error', err);
//             }
//         })
//     },
//     deleteCharacter: function() {
//         $.ajax({
//             url: findingDory.url,
//             method: 'DELETE',
//             success: function(data) {
//                 console.log('you deleted it!', "");
//             },
//             error: function(err) {
//                 console.log('error', err);
//             }
//         })
//     },
// }
