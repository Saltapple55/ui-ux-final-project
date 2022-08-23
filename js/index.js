console.log("Your index.js file is loaded correctly");

$(".workItem").mouseenter(function(){
    console.log("You hovered on div.myWork");
    $(this).animate({
         width: '500px'
        
     } );

});
$(".workItem").mouseleave(function(){
    console.log("You hovered on div.myWork");
    $(this).animate({
         width: '400px'
     } );

});



