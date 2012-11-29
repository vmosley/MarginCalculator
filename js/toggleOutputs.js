//[type=tel] can replace [type=tel]
//	$('input[type=text]:not([data-x=1])')
//$("[type=tel][data-x='3']").each(function() { do something } );    //just for reference
//when padding is 100 clear and reset padding
//$("input[name=AA]").addClass("selected");
	
/* Clear swiped Input plus all calculated Inputs */
$('[type=tel]').bind('swipeleft',function(){
	$('[type=tel][data-x="3"]').stop().animate({'padding-right':700},'slow');
	$(this).stop().animate({'padding-right':700},'slow',function(){
		$(this).css({'padding-right':10});
		$('[type=tel][data-x="3"]').css({'padding-right':10});
		
		$(this).val('');
		$('[type=tel][data-x="3"]').val('');
	});
});

// NEW CODE***************************************************************
// NEW CODE***************************************************************


$('[type=tel]').bind(' keydown ',function(){
		//if(isNaN(C)){} 
	
	$(this).css({color:"black"});
	$('[type=tel][data-x=3]').css({color:"red"});
	//var count = 0;
	//count++;
 	//Get type of output/input, 1,2 or 3 (real)
	 dataCurrent = $(this).attr('data-x');
	
	if (dataCurrent == '3'){  
			$(this).attr('data-x','1');
			$('[type=tel][data-x=2]').not(this).attr('data-x','3');
			$('[type=tel][data-x=1]').not(this).attr('data-x','2');
	}else if (dataCurrent == '2'){
		$(this).attr('data-x','1');
		$('[type=tel][data-x=1]').not(this).attr('data-x','2');
	}else{/*Add error checking for version 2, with a data-x counter. if != default then reset*/}
	
	//Get type of output/input, 1,2 or 3 (real)
	dataBillRate = $("[type=tel][name='billRate']").attr('data-x');
	dataPayRate = $("[type=tel][name='payRate']").attr('data-x');
	dataMarkUp = $("[type=tel][name='markUp']").attr('data-x');
	dataGrossProfitMargin = $("[type=tel][name='grossProfitMargin']").attr('data-x');
	dataGrossMarginPercent = $("[type=tel][name='grossMarginPercent']").attr('data-x');
	
	billRate          	= (markUp + payRate) + 1; 
	payRate           	= (billRate - markUp) + 1
	markUp            	= (billRate - payRate) - 1; 
    grossProfitMargin 	= 23;
	grossMarginPercent	= (grossProfitMargin / billRate);
	
		
	$('[type=tel][name="billRate"][data-x=3]').not(this).not('[data-x=2]').val(billRate.toString());
	$('[type=tel][name="payRate"][data-x=3]').not(this).not('[data-x=2]').val(payRate.toString());
	$('[type=tel][name="markUp"][data-x=3]').not(this).not('[data-x=2]').val(markUp.toString());
	$('[type=tel][name="grossProfitMargin"][data-x=3]').not(this).not('[data-x=2]').val(grossProfitMargin.toString());
	$('[type=tel][name="grossMarginPercent"][data-x=3]').not(this).not('[data-x=2]').val(grossMarginPercent.toString());

});	

function recalc() {
  jQuery("input[class^=percent]").calc("(invoice - cost)/invoice * 100", {
    invoice: jQuery("input[class^=invoice]"),
    cost: jQuery("input[class^=cost]")
  },
  function(s) {
    // return an empty string if s is NaN
    return !isNaN(s) ? s.toFixed(2) + "%" : "";
  });
}