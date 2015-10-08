// This is a test run, so I've only set the Cootie Catcher down a single decision tree.
// Answer the prompts "Sun", "2", and "1", respectively, for an article of inane, astrological advice!
// Several questions and anecdotes for class:
// - I realize that the algorithim for a cootie catcher is a simple alternation between two sets of numbers.
// - So by grouping the even and odd numbers together in their own sets, I've accidentally provided my players with the illusion of choice.
// - How do I measure answers by a metric other than the exact answer? (e.g. if the answer is even, for example).

$(document).ready(function(){
    var Signs=["Sun","Moon","Stars","Sky"];
    var evenNumbers=["2","4"];
    var oddNumbers=["1","3"];
    var unknownSign=["I'm not familiar with that sign, pal!"];
    var FRUIT=["The proper way to live is naked, in the sun, eating nothing but coconuts."];

    var moonQuadLabel1 = "";
    var moonQuadLabel2 = "";
    var clickCount = 0;

    // this is the same as below
    /*$().click( function() {
            function() {
                    clickCount++;
                    if(clickCount == 0) {
                    }  else if( clickCount == 1) {

                    }
                    prompt("Kevin luuuuvs this UI!!");

    } );
    */

    // $("#MoonQuadrant").on("click", function() {
    //     clickCount++;
    //     if(clickCount == 0) {
    //     }  else if( clickCount == 1) {

    //     }
    //     prompt("Kevin luuuuvs this UI!!");
    // });


    $("#Quad1").on("click", onClickHandlerFirstTime);
    $("#Quad2").on("click", onClickHandlerFirstTime);
    $("#Quad3").on("click", onClickHandlerFirstTime);
    $("#Quad4").on("click", onClickHandlerFirstTime);


    function onClickHandlerFirstTime(event) {
        $("#Quad2").text("Moon");
        $("#Quad1").text("Sun");
        $("#Quad3").text("Stars");
        $("#Quad4").text("Sky");

        //turn off all of your first click handlers        
        $("#Quad2").off( "click", onClickHandlerFirstTime);
        $("#Quad1").off(  "click", onClickHandlerFirstTime);
        $("#Quad3").off( "click", onClickHandlerFirstTime);
        $("#Quad4").off(  "click", onClickHandlerFirstTime);
        //turn on all of your second click handlers
        $("#Quad2").on( "click", onClickHandlerSecondTime);
        $("#Quad1").on(  "click", onClickHandlerSecondTime);
        $("#Quad3").on( "click", onClickHandlerSecondTime);
        $("#Quad4").on(  "click", onClickHandlerSecondTime);           
    }


    function onClickHandlerSecondTime(event) {

        var id = event.currentTarget.id;
        console.log(id);
        if( id == "Quad2") {
            $("#Quad2").text("If they can get you asking the wrong questions, they don't have to worry about answers.");    
        } else if( id == "Quad1") {
            $("#Quad1").text("Let the peace of this day be here tomorrow when I wake up.");                
            } else if( id == "Quad3") {
                $("#Quad3").text("Our history is an aggregate of final moments."); 
                } else if( id == "Quad4") {
                    $("#Quad4").text("A screaming comes across the sky."); 
                    }
        
    }


        $("#Quad1").append("<p> This is going to be a new paragraph with your selection: " + signChoice +" </p>");//.html("<p> This is going to be a new paragraph with your selection: " + signChoice +" </p>"); //.css({background: '#CC0'}); //.text("YOu chose this prompt: " + signChoice);

        function action1(choice) {
            //change each div element to have the image or content that you want
        }


        function action2(choice) {

        }

        function action3(choice) {

        }
});