

//check off specific todo's by clicking


/*

    click() vs on('click') differences

    - click() only adds listeners for existing elements
    - on() will add listeners for all potential future elements

    You can only add .on onto elements that exist at the begining

*/

$("ul").on("click","li",function(){

    /*
         You can only add .on onto elements that exist at the begining
    */

    $(this).toggleClass("completed");

    // if($(this).css("color")==="rgb(128, 128, 128)"){
    //     $(this).css("color","black");
    //     $(this).css("text-decoration", "none");
    // }
    // else{
    //     $(this).css("color","gray");
    //     $(this).css("text-decoration", "line-through");
    // }

});

//click on x to delete todo
$("ul").on("click","span", function(event){
    /*
        1. .parent() gives us the higher order which is LI
        2. prevents further higher order events from firing.

        This is to prevent "bubbling up" when different events are fired inside 
        nested elements.
    */
    $(this).parent().fadeOut(300,function(){//1.
        $(this).remove();
    });

    event.stopPropagation();//2.
});

//input form
$("input[type='text']").keypress(function(event){
    /*

        13 is the keycode for the enter key, .which checks for key codes

    */
    if(event.which===13){
        //grab todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add it to the ul,  USE SINGLE QUOTES TO NOT BREAK THE STRING
        $("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> "+todoText+"</li>");
       
    }
    

});


$(".fa-plus").click(function(){

    $("input[type='text']").fadeToggle();
});
