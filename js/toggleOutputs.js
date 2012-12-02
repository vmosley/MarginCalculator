//[type=tel] can replace [type=tel]
//	$('input[type=text]:not([data-x=1])')
//$("[type=tel][data-x='3']").each(function() { do something } );    //just for reference
//when padding is 100 clear and reset padding
//$("input[name=AA]").addClass("selected");
	
	

	
/* Clear swiped Input plus all calculated Inputs */
$('[type=tel]').bind('swipeleft',function(){
	$('[type=tel][data-x="3"]').stop().animate({'padding-right':250},'fast');
	//$('[type=tel][data-x="3"]').animate({color:'white'},250);
	$(this).stop().animate({'padding-right':250},'fast',function(){
		$(this).css({'padding-right':10});
		$('[type=tel][data-x="3"]').css({'padding-right':10});
		
		$(this).val('');
		$('[type=tel][data-x="3"]').val('');
	});
});


$("[type=tel]").focus(function() {
		$(this).addClass("curFocus");
	});
	
$("[type=tel]").blur(function() {
		$(this).removeClass("curFocus");
	});
	
$("[type=tel]").blur(function() {
		$(this).removeClass("curFocus");
	});	
	
// NEW CODE***************************************************************
$('[type=tel]').bind(' keydown ',function(){
	
	//var count = 0;
	//count++;
	 
 	/* DETERMINE WHAT TYPE OF INPUT/OUTPUT Get type of output/input, 1,2 or 3 (real)*/
	dataCurrent = $(this).attr('data-x');
	
	if (dataCurrent == '3'){  
		$(this).attr('data-x','1');
		$('[type=tel][data-x=2]').not(this).attr('data-x','3');
		$('[type=tel][data-x=1]').not(this).attr('data-x','2');
	}else if (dataCurrent == '2'){
		$(this).attr('data-x','1');
		$('[type=tel][data-x=1]').not(this).attr('data-x','2');
	}else{/*Add error checking for version 2, with a data-x counter. if != default then reset*/}
	
		
	//code for adding equals background pic for when data=3
	//var payRatePic= $("[name='payRate']").css('background-image');
	
	//$(this).css({color:"black"});
	
	/***********************************OUTPUT STYLING********************************/
	$('[type=tel][data-x="3"]').css({color:"red"});
	$('[type=tel]').not("[data-x='3']").css({color:"blue"});
	
	//Adds Equals when Calculated
	var nothingPic='url(\"./images/nothing.png\")';
	var equalsPic= 'url(\"./images/equals.png\")';
	
	var billRatePic='url(\"./images/billRate.png\")';
	var payRatePic='url(\"./images/payRate.png\")';
	var markUpPic='url(\"./images/markUp.png\")';
	var grossProfitMarginPic='url(\"./images/grossProfitMargin.png\")';
	var grossMarginPercentPic='url(\"./images/grossMarginPercent.png\")';
	
	$("[type=tel][name='billRate'][data-x='3']").css('background-image', billRatePic + ',' + equalsPic);
	$("[type=tel][name='billRate']").not("[data-x='3']").css('background-image', billRatePic+','+nothingPic);
	$("[type=tel][name='payRate'][data-x='3']").css('background-image', payRatePic + ',' + equalsPic);
	$("[type=tel][name='payRate']").not("[data-x='3']").css('background-image', payRatePic+','+nothingPic);
	$("[type=tel][name='markUp'][data-x='3']").css('background-image', markUpPic + ',' + equalsPic);
	$("[type=tel][name='markUp']").not("[data-x='3']").css('background-image', markUpPic+','+nothingPic);
	$("[type=tel][name='grossProfitMargin'][data-x='3']").css('background-image', grossProfitMarginPic + ',' + equalsPic);
	$("[type=tel][name='grossProfitMargin']").not("[data-x='3']").css('background-image', grossProfitMarginPic +','+nothingPic);
	$("[type=tel][name='grossMarginPercent'][data-x='3']").css('background-image', grossMarginPercentPic + ',' + equalsPic);
	$("[type=tel][name='grossMarginPercent']").not("[data-x='3']").css('background-image', grossMarginPercentPic +','+nothingPic);
	
	
	/* console.log('payRatePic: ', payRatePic);
	console.log('equalsPic: ', equalsPic);
	 */
	/*****************************OUTPUT CALCULATIONS**********************************/
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
	
	//$('[type=tel][data-x=3]').addClass("equals"); no longer needed(didnt work)
	
	
	//Sends calculated values to text outputs when data-x=3
	$('[type=tel][name="billRate"][data-x=3]').not(this).not('[data-x=2]').val(billRate.toString());
	$('[type=tel][name="payRate"][data-x=3]').not(this).not('[data-x=2]').val(payRate.toString());
	$('[type=tel][name="markUp"][data-x=3]').not(this).not('[data-x=2]').val(markUp.toString());
	$('[type=tel][name="grossProfitMargin"][data-x=3]').not(this).not('[data-x=2]').val(grossProfitMargin.toString());
	$('[type=tel][name="grossMarginPercent"][data-x=3]').not(this).not('[data-x=2]').val(grossMarginPercent.toString());

});	


/* //function grabbed from web to remove NaN
function recalc() {
  jQuery("input[class^=percent]").calc("(invoice - cost)/invoice * 100", {
    invoice: jQuery("input[class^=invoice]"),
    cost: jQuery("input[class^=cost]")
  },
  function(s) {
    // return an empty string if s is NaN
    return !isNaN(s) ? s.toFixed(2) + "%" : "";
  });
} */