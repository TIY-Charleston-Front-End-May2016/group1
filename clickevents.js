$(document).ready(function() {
    findingDori.init();
})

var findingDori = {
    url: "http://tiny-tiny.herokuapp.com/collections/findingDori",
    characterArr: [],
    init: function() {
        findingDori.styling();
        findingDori.events();
    },
    styling: function() {
        // findingDori.getCharacter();
    },
    events: function() {
      $('.brucepic').on('click', function(){
        event.preventDefault();
        console.log("you clicked bruce's name");
        $('.encounters').removeClass('hidden');
        $('.characterselect').addClass('hidden');
      });
    }
  }

    // createCharacter: function(whateverYouWantToGiveMe) {
    //     $.ajax({
    //         url: findingDori.url,
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
//             url: findingDori.url,
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
//             url: findingDori.url,
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
//             url: findingDori.url,
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
