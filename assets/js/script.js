$(document).ready(function(){

    // $("random-colour").hover(function(e) {

    //     var randomColour = getRandomColour();
    //     $(e.target).attr("class", randomColour);

    // });

    $(".random-colour").hover(function() {
        var randomColour = getRandomColour();
        $(this).attr("class", randomColour);
    }, function() {
        
        $(this).attr("class", "red");
    });
});

function getRandomColour(){

    //Store available css classes
    var colours = new Array("green", "purple", "yellow", "orange", "blue");
    
    //Give a random number from 0 to 5
    var randomNumber = Math.floor(Math.random()*6);
    
    return colours[randomNumber];
}

// $(document).ready(function(){
//     $('[data-toggle="tooltip"]').tooltip(); 
// });