 //[type=tel] can replace [type=tel]
//$("[type=tel][data-x='3']").each(function() { do something } );    //just for reference
	//when padding is 100 clear and reset padding

	
/* Clear swiped Input plus all calculated Inputs */
$('[type=tel]').bind('swipeleft',function(){
	$('[type=tel][data-x="3"]').stop().animate({'padding-right':800},'slow');
	$(this).stop().animate({'padding-right':800},'slow',function(){
		$(this).css({'padding-right':0});
		$('[type=tel][data-x="3"]').css({'padding-right':0});
		
		$(this).val('');
		$('[type=tel][data-x="3"]').val('');
	});
});

//=================================================================AA===========================
$('input[name=AA]').bind(' keyup change',function(){
	
	//var count = 0;
	//count++;

	//$("input[name=AA]").addClass("selected");

	 dataA = $("[type=tel][name='AA']").attr('data-x');
	 dataB = $("[type=tel][name='BB']").attr('data-x');
	 dataC = $("[type=tel][name='CC']").attr('data-x');
	
	
	if (dataA == '3' || dataA == '2'){
		$("[type=tel][name='AA']").attr('data-x','1');
		if(dataB == '1' )
			$("[type=tel][name='BB']").attr('data-x','2');
			else if(dataB == '2')
				$("[type=tel][name='BB']").attr('data-x','3');		
		if(dataC == '1' )
			$("[type=tel][name='CC']").attr('data-x','2');
			else if(dataC == '2')
				$("[type=tel][name='CC']").attr('data-x','3');
			
	}
	else if (dataA == '1')
	{
	//Reset Input Color
	$('[type=tel][name="AA"]').css({color:"black"});
	}
	
	 A = parseFloat($("[type=tel][name='AA']").val(),10);
	 B = parseFloat($("[type=tel][name='BB']").val(),10);
	 C = parseFloat($("[type=tel][name='CC']").val(),10);
	
	if(dataB == '3' ){
		B = (C - A);
    	//Display in field
		$('[type=tel][name="BB"]').val(B.toString());
		//Change Style
		$('[type=tel][name="BB"]').css({color:"red"});
		}
		else //Change Style for Inputs
		$('[type=tel][name="BB"]').css({color:"black"});
		
	
	if(dataC == '3' ){
		C = (A + B);
    	//Display in field
		$('[type=tel][name="CC"]').val(C.toString());
		//Change Style for Outputs
		$('[type=tel][name="CC"]').css({color:"red"});
	}
	else //Change Style for Inputs
		$('[type=tel][name="CC"]').css({color:"black"});

});	

//=================================================================BB===========================
$('input[name=BB]').bind(' keyup change',function(){
	
	//var count = 0;
	//count++;

	
	 dataA = $("[type=tel][name='AA']").attr('data-x');
	 dataB = $("[type=tel][name='BB']").attr('data-x');
	 dataC = $("[type=tel][name='CC']").attr('data-x');
	
	
	if (dataB == '3' || dataB == '2'){
		$("[type=tel][name='BB']").attr('data-x','1');
		if(dataC == '1' )
			$("[type=tel][name='CC']").attr('data-x','2');
			else if(dataC == '2')
				$("[type=tel][name='CC']").attr('data-x','3');		
		if(dataA == '1' )
			$("[type=tel][name='AA']").attr('data-x','2');
			else if(dataA == '2')
				$("[type=tel][name='AA']").attr('data-x','3');
			
	}
	else if (dataB == '1')
	{
	//Reset Input Color
	$('[type=tel][name="BB"]').css({color:"black"});
	}
	
	 B = parseFloat($("[type=tel][name='BB']").val(),10);
	 A = parseFloat($("[type=tel][name='AA']").val(),10);
	 C = parseFloat($("[type=tel][name='CC']").val(),10);
	
	if(dataA == '3' ){
		A = (C - B);
    	//Display in field
		$('[type=tel][name="AA"]').val(A.toString());
		//Change Style
		$('[type=tel][name="AA"]').css({color:"red"});
	}
	else
		$('[type=tel][name="AA"]').css({color:"black"});
		
	if(dataC == '3' ){
		C = (A + B);
    	//Display in field
		$('[type=tel][name="CC"]').val(C.toString());
		//Change Style for Outputs
		$('[type=tel][name="CC"]').css({color:"red"});
	}
	else //Change Style for Inputs
		$('[type=tel][name="CC"]').css({color:"black"});

});	

//=================================================================CC===========================
$('input[name=CC]').bind(' keyup change',function(){
	
	//var count = 0;
	//count++;

	
	 dataC = $("[type=tel][name='CC']").attr('data-x');
	 dataA = $("[type=tel][name='AA']").attr('data-x');
	 dataB = $("[type=tel][name='BB']").attr('data-x');
	
	
	if (dataC == '3' || dataC == '2'){
		$("[type=tel][name='CC']").attr('data-x','1');
		if(dataB == '1' )
			$("[type=tel][name='BB']").attr('data-x','2');
			else if(dataB == '2')
				$("[type=tel][name='BB']").attr('data-x','3');		
		if(dataA == '1' )
			$("[type=tel][name='AA']").attr('data-x','2');
			else if(dataA == '2')
				$("[type=tel][name='AA']").attr('data-x','3');
			
	}
	else if (dataC == '1')
	{
	//Reset Input Color
	$('[type=tel][name="CC"]').css({color:"black"});
	}
	
	 C = parseFloat($("[type=tel][name='CC']").val(),10);
	 A = parseFloat($("[type=tel][name='AA']").val(),10);
	 B = parseFloat($("[type=tel][name='BB']").val(),10);
	
	if(dataB == '3' ){
		B = (C - A);
    	//Display in field
		$('[type=tel][name="BB"]').val(B.toString());
		//Change Style for Outputs
		$('[type=tel][name="BB"]').css({color:"red"});
	}
	else //Change Style for Inputs
		$('[type=tel][name="BB"]').css({color:"black"});
		
	if(dataA == '3' ){
		A = (C - B);
    	//Display in field
		$('[type=tel][name="AA"]').val(A.toString());
		//Change Style for Outputs
		$('[type=tel][name="AA"]').css({color:"red"});
	}
	else //Change Style for Inputs
		$('[type=tel][name="AA"]').css({color:"black"});
	

});	//=================================================================Bill Rate===================
$('input[name=billRate]').bind(' keyup change',function(){
	
	//var count = 0;
	//count++;

	
	 dataC = $("[type=tel][name='CC']").attr('data-x');
	 dataA = $("[type=tel][name='AA']").attr('data-x');
	 dataB = $("[type=tel][name='BB']").attr('data-x');
	 dataB = $(this).attr('data-x');
	 dataPayRate = $("[type=tel][name='payRate']").attr('data-x');
	 dataMarkUp = $("[type=tel][name='markUp']").attr('data-x');
	 dataGrossProfitMargin = $("[type=tel][name='grossProfitMargin']").attr('data-x');
	 dataGrossMarginPercent = $("[type=tel][name='grossMarginPercent']").attr('data-x');
	
	
	if (dataC == '3' || dataC == '2'){
		$(this).attr('data-x','1');
		if(dataB == '1' )
			$("[type=tel][name='BB']").attr('data-x','2');
			else if(dataB == '2')
				$("[type=tel][name='BB']").attr('data-x','3');		
		if(dataA == '1' )
			$("[type=tel][name='AA']").attr('data-x','2');
			else if(dataA == '2')
				$("[type=tel][name='AA']").attr('data-x','3');
			
	}
	else if (dataC == '1')
	{
	//Reset Input Color
	$(this).css({color:"black"});
	}
	
	 C = parseFloat($(this).val(),10);
	 A = parseFloat($("[type=tel][name='AA']").val(),10);
	 B = parseFloat($("[type=tel][name='BB']").val(),10);
	 B = parseFloat($("[type=tel][name='BB']").val(),10);
	 B = parseFloat($("[type=tel][name='payRate']").val(),10);
	 B = parseFloat($("[type=tel][name='markUp']").val(),10);
	 B = parseFloat($("[type=tel][name='grossProfitMargin']").val(),10);
	 B = parseFloat($("[type=tel][name='grossMarginPercent']").val(),10);
	
	if(dataB == '3' ){
		B = (C - A);
    	//Display in field
		$('[type=tel][name="BB"]').val(B.toString());
		//Change Style for Outputs
		$('[type=tel][name="BB"]').css({color:"red"});
	}
	else //Change Style for Inputs
		$('[type=tel][name="BB"]').css({color:"black"});
		
	if(dataA == '3' ){
		A = (C - B);
    	//Display in field
		$('[type=tel][name="AA"]').val(A.toString());
		//Change Style for Outputs
		$('[type=tel][name="AA"]').css({color:"red"});
	}
	else //Change Style for Inputs
		$('[type=tel][name="AA"]').css({color:"black"});
	

});	

$('[type=tel]').bind('swipeleft', function(event){
//animate and reset
});