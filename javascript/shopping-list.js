
$(document).ready(function() {



$('input').keydown(function(enter) { // listen for keypress
  if(enter.keyCode == 13) { 
    var userinput = $('input').val(); // capture content of input to variable "userinput"
    $('.bigbox').append('<div><div class="list-item">' + userinput + '</div>' + '<div class="delete-me">x</div></div>'); // append input to bottom of list
    $('input').val(''); // reset input
  }
});



$("div").on('click', ".list-item", function(){
  $(this).css('text-decoration','line-through'); // change the list item when clicked  
});


$("div").on('click', ".delete-me", function(){
  $(this).prev('div.list-item').remove(); //remove the selected item
  $(this).remove(); //remove that item's delete button
});

});