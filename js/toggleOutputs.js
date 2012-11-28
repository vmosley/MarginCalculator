 //[type=tel] can replace [type=tel]
 //	$('input[type=text]:not([data-x=1])')
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

// NEW CODE***************************************************************
// NEW CODE***************************************************************
$('[type=tel]').bind(' keyup change',function(){
	$(this).css({color:"black"});
	//var count = 0;
	//count++;

	//$("input[name=AA]").addClass("selected");

 	//Get type of output/input, 1,2 or 3 (real)
	 dataCurrent= $(this).attr('data-x');
	
	if (dataCurrent != '1'){   //if not input(1) set to input(1) and set rest
		$(this).attr('data-x','1');
		if($("[type=tel]").not(this) == '1' )
			$("[type=tel]").not(this).attr('data-x','2');
			else if($("[type=tel]").not(this) == '2')
				$("[type=tel]").not(this).attr('data-x','3');		
	}
	else if (dataCurrent == '1') //Reset Input Color -> probably should do nothing
	{
	//do nothing
	}
	
	//Get type of output/input, 1,2 or 3 (real)
	dataBillRate = $("[type=tel][name='billRate']").attr('data-x');
	dataPayRate = $("[type=tel][name='payRate']").attr('data-x');
	dataMarkUp = $("[type=tel][name='markUp']").attr('data-x');
	dataGrossProfitMargin = $("[type=tel][name='grossProfitMargin']").attr('data-x');
	dataGrossMarginPercent = $("[type=tel][name='grossMarginPercent']").attr('data-x');
	//if(isNaN(C)){alert('A is NaN')} ///I'll Deal with NaN later
	
	billRate          	= 23; 
	payRate           	= 23; 
	markUp            	= 23; 
    grossProfitMargin 	= 23;
	grossMarginPercent	= 23;
	
	//Change Style for Outputs
	$('[type=tel][data-x=3]').css({color:"red"});	
	
	
	$(':input[name="billRate"]').val(billRate.toString());
	$(':input[name="payRate"]').val(payRate.toString());
	$(':input[name="markUp"]').val(markUp.toString());
	$(':input[name="grossProfitMargin"]').val(grossProfitMargin.toString());
	$(':input[name="grossMarginPercent"]').val(grossMarginPercent.toString());

});	