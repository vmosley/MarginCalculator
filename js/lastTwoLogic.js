//=================================================================AA===========================
$('input[name=AA]').bind(' keyup change',function(){
	
	//var count = 0;
	//count++;

	
	 dataA = $("[type=text][name='AA']").attr('data-x');
	 dataB = $("[type=text][name='BB']").attr('data-x');
	 dataC = $("[type=text][name='CC']").attr('data-x');
	
	
	if (dataA == '3' || dataA == '2'){
		$("[type=text][name='AA']").attr('data-x','1');
		if(dataB == '1' )
			$("[type=text][name='BB']").attr('data-x','2');
			else if(dataB == '2')
				$("[type=text][name='BB']").attr('data-x','3');		
		if(dataC == '1' )
			$("[type=text][name='CC']").attr('data-x','2');
			else if(dataC == '2')
				$("[type=text][name='CC']").attr('data-x','3');
			
	}
	else if (dataA == '1')
	{
	//donothing
	}
	
	 A = parseFloat($("input[type=text][name='AA']").val(),10);
	 B = parseFloat($("input[type=text][name='BB']").val(),10);
	 C = parseFloat($("input[type=text][name='CC']").val(),10);
	
	if(dataB == '3' ){
		B = (C - A);
    	//Display in field
		$(':input[name="BB"]').val(B.toString());
	}
	if(dataC == '3' ){
		C = (A + B);
    	//Display in field
		$(':input[name="CC"]').val(C.toString());
	}	

});	

//=================================================================BB===========================
$('input[name=BB]').bind(' keyup change',function(){
	
	//var count = 0;
	//count++;

	
	 dataA = $("[type=text][name='AA']").attr('data-x');
	 dataB = $("[type=text][name='BB']").attr('data-x');
	 dataC = $("[type=text][name='CC']").attr('data-x');
	
	
	if (dataB == '3' || dataB == '2'){
		$("[type=text][name='BB']").attr('data-x','1');
		if(dataC == '1' )
			$("[type=text][name='CC']").attr('data-x','2');
			else if(dataC == '2')
				$("[type=text][name='CC']").attr('data-x','3');		
		if(dataA == '1' )
			$("[type=text][name='AA']").attr('data-x','2');
			else if(dataA == '2')
				$("[type=text][name='AA']").attr('data-x','3');
			
	}
	else if (dataB == '1')
	{
	//donothing
	}
	
	 B = parseFloat($("input[type=text][name='BB']").val(),10);
	 A = parseFloat($("input[type=text][name='AA']").val(),10);
	 C = parseFloat($("input[type=text][name='CC']").val(),10);
	
	if(dataA == '3' ){
		A = (C - B);
    	//Display in field
		$(':input[name="AA"]').val(A.toString());
	}
	if(dataC == '3' ){
		C = (A + B);
    	//Display in field
		$(':input[name="CC"]').val(C.toString());
	}	

});	

//=================================================================CC===========================
$('input[name=CC]').bind(' keyup change',function(){
	
	//var count = 0;
	//count++;

	
	 dataC = $("[type=text][name='CC']").attr('data-x');
	 dataA = $("[type=text][name='AA']").attr('data-x');
	 dataB = $("[type=text][name='BB']").attr('data-x');
	
	
	if (dataC == '3' || dataC == '2'){
		$("[type=text][name='CC']").attr('data-x','1');
		if(dataB == '1' )
			$("[type=text][name='BB']").attr('data-x','2');
			else if(dataB == '2')
				$("[type=text][name='BB']").attr('data-x','3');		
		if(dataA == '1' )
			$("[type=text][name='AA']").attr('data-x','2');
			else if(dataA == '2')
				$("[type=text][name='AA']").attr('data-x','3');
			
	}
	else if (dataC == '1')
	{
	//donothing
	}
	
	 C = parseFloat($("input[type=text][name='CC']").val(),10);
	 A = parseFloat($("input[type=text][name='AA']").val(),10);
	 B = parseFloat($("input[type=text][name='BB']").val(),10);
	
	if(dataB == '3' ){
		B = (C - A);
    	//Display in field
		$(':input[name="BB"]').val(B.toString());
	}
	if(dataA == '3' ){
		A = (C - B);
    	//Display in field
		$(':input[name="AA"]').val(A.toString());
	}	

});	