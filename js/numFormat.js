
$(document).ready(function(){
	
	
	$('[type=tel]').keydown(function(event){
		  // skip for arrow keys
		  if(event.which >= 37 && event.which <= 40){
			  event.preventDefault();
		  }
		  var $this = $(this);
		  var num = $this.val().replace(/,/g,'');
		  // the following line has been simplified. Revision history contains original.
		  $this.val(num.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"));
	  }); 
	  
	$('[data-Digit]').click(function(event){
		  // skip for arrow keys
		  if(event.which >= 37 && event.which <= 40){
			  event.preventDefault();
		  }
		  var $this = $(this);
		  var num = $this.val().replace(/,/g,'');
		  // the following line has been simplified. Revision history contains original.
		  $this.val(num.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"));
	}); 
  
});
  
  