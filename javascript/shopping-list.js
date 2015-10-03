
$(document).ready(function() {
	$('input').keydown(function(enter) { 
  		if(enter.keyCode == 13) { 
    		var userinput = $('input').val().toLowerCase(); 
        $('<div class="container"><div class="list-item">' + userinput + '</div>' + '<div class="delete-me">x</div></div>').appendTo(".bigbox").hide().fadeIn(200); 
    		$('input').val('');
  		}
	});
	$("div").on('click', ".list-item", function(){
  		$(this).toggleClass('struck-item'); 
	});
	$("div").on('click', ".delete-me", function(){
      $(this).closest('div.container').fadeOut(200, function () {
        $(this).closest('div.container').remove();
      });
  });
});