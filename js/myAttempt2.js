 $(':text').bind('swipeleft', function(event){
 $(":text[data-x='3']").animate({
    opacity: 0.25,
    left: '+=50',
    height: 'toggle'
  }, 5000, function() {
    // Animation complete.
  });
 $(this).val('');
 $(":text[data-x='3']").each(function() { $(":text[data-x='3']").val('');} );
 });
//=================================================================AA===========================
$('input[name=AA]').bind(' keyup change',function(){
	
	//var count = 0;
	//count++;

	//$("input[name=AA]").addClass("selected");

	 dataA = $(":text[name='AA']").attr('data-x');
	 dataB = $(":text[name='BB']").attr('data-x');
	 dataC = $(":text[name='CC']").attr('data-x');
	
	
	if (dataA == '3' || dataA == '2'){
		$(":text[name='AA']").attr('data-x','1');
		if(dataB == '1' )
			$(":text[name='BB']").attr('data-x','2');
			else if(dataB == '2')
				$(":text[name='BB']").attr('data-x','3');		
		if(dataC == '1' )
			$(":text[name='CC']").attr('data-x','2');
			else if(dataC == '2')
				$(":text[name='CC']").attr('data-x','3');
			
	}
	else if (dataA == '1')
	{
	//Reset Input Color
	$(':input[name="AA"]').css({color:"black"});
	}
	
	 A = parseFloat($("input:text[name='AA']").val(),10);
	 B = parseFloat($("input:text[name='BB']").val(),10);
	 C = parseFloat($("input:text[name='CC']").val(),10);
	
	if(dataB == '3' ){
		B = (C - A);
    	//Display in field
		$(':input[name="BB"]').val(B.toString());
		//Change Style
		$(':input[name="BB"]').css({color:"red"});
		}
		else //Change Style for Inputs
		$(':input[name="BB"]').css({color:"black"});
		
	
	if(dataC == '3' ){
		C = (A + B);
    	//Display in field
		$(':input[name="CC"]').val(C.toString());
		//Change Style for Outputs
		$(':input[name="CC"]').css({color:"red"});
	}
	else //Change Style for Inputs
		$(':input[name="CC"]').css({color:"black"});

});	

//=================================================================BB===========================
$('input[name=BB]').bind(' keyup change',function(){
	
	//var count = 0;
	//count++;

	
	 dataA = $(":text[name='AA']").attr('data-x');
	 dataB = $(":text[name='BB']").attr('data-x');
	 dataC = $(":text[name='CC']").attr('data-x');
	
	
	if (dataB == '3' || dataB == '2'){
		$(":text[name='BB']").attr('data-x','1');
		if(dataC == '1' )
			$(":text[name='CC']").attr('data-x','2');
			else if(dataC == '2')
				$(":text[name='CC']").attr('data-x','3');		
		if(dataA == '1' )
			$(":text[name='AA']").attr('data-x','2');
			else if(dataA == '2')
				$(":text[name='AA']").attr('data-x','3');
			
	}
	else if (dataB == '1')
	{
	//Reset Input Color
	$(':input[name="BB"]').css({color:"black"});
	}
	
	 B = parseFloat($("input:text[name='BB']").val(),10);
	 A = parseFloat($("input:text[name='AA']").val(),10);
	 C = parseFloat($("input:text[name='CC']").val(),10);
	
	if(dataA == '3' ){
		A = (C - B);
    	//Display in field
		$(':input[name="AA"]').val(A.toString());
		//Change Style
		$(':input[name="AA"]').css({color:"red"});
	}
	else
		$(':input[name="AA"]').css({color:"black"});
		
	if(dataC == '3' ){
		C = (A + B);
    	//Display in field
		$(':input[name="CC"]').val(C.toString());
		//Change Style for Outputs
		$(':input[name="CC"]').css({color:"red"});
	}
	else //Change Style for Inputs
		$(':input[name="CC"]').css({color:"black"});

});	

//=================================================================CC===========================
$('input[name=CC]').bind(' keyup change',function(){
	
	//var count = 0;
	//count++;

	
	 dataC = $(":text[name='CC']").attr('data-x');
	 dataA = $(":text[name='AA']").attr('data-x');
	 dataB = $(":text[name='BB']").attr('data-x');
	
	
	if (dataC == '3' || dataC == '2'){
		$(":text[name='CC']").attr('data-x','1');
		if(dataB == '1' )
			$(":text[name='BB']").attr('data-x','2');
			else if(dataB == '2')
				$(":text[name='BB']").attr('data-x','3');		
		if(dataA == '1' )
			$(":text[name='AA']").attr('data-x','2');
			else if(dataA == '2')
				$(":text[name='AA']").attr('data-x','3');
			
	}
	else if (dataC == '1')
	{
	//Reset Input Color
	$(':input[name="CC"]').css({color:"black"});
	}
	
	 C = parseFloat($("input:text[name='CC']").val(),10);
	 A = parseFloat($("input:text[name='AA']").val(),10);
	 B = parseFloat($("input:text[name='BB']").val(),10);
	
	if(dataB == '3' ){
		B = (C - A);
    	//Display in field
		$(':input[name="BB"]').val(B.toString());
		//Change Style for Outputs
		$(':input[name="BB"]').css({color:"red"});
	}
	else //Change Style for Inputs
		$(':input[name="BB"]').css({color:"black"});
		
	if(dataA == '3' ){
		A = (C - B);
    	//Display in field
		$(':input[name="AA"]').val(A.toString());
		//Change Style for Outputs
		$(':input[name="AA"]').css({color:"red"});
	}
	else //Change Style for Inputs
		$(':input[name="AA"]').css({color:"black"});
	

});	

$(':text').bind('swipeleft', function(event){
//animate and reset
});