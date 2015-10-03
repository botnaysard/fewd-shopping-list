
$(document).ready(function() {
	$('input').keydown(function(enter) { 
  		if(enter.keyCode == 13) { 
    		var userinput = $('input').val().toLowerCase(); 
    		$('.bigbox').append('<div class="container"><div class="list-item">' + userinput + '</div>' + '<div class="delete-me">x</div></div>'); 
    		$('input').val('');
  		}
	});
	$("div").on('click', ".list-item", function(){
  		$(this).toggleClass('struck-item'); 
	});
	$("div").on('click', ".delete-me", function(){
  		$(this).closest('div.container').remove(); 
	});
});