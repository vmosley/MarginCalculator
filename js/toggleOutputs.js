//[type=tel] can replace [type=tel]
//	$('input[type=text]:not([data-x=1])')
//$("[type=tel][data-x='3']").each(function() { do something } );    //just for reference
//when padding is 100 clear and reset padding
//$("input[name=AA]").addClass("selected");

/**************INITAL STYLING******************************/
	var nothingPic='url(\"./images/nothing.png\")';
	var equalsPic= 'url(\"./images/equals.png\")';
	
	var billRatePic='url(\"./images/billRate.png\")';
	var payRatePic='url(\"./images/payRate.png\")';
	var markUpPic='url(\"./images/markUpPercent.png\")';
	var grossProfitMarginPic='url(\"./images/grossProfitMargin.png\")';
	var grossMarginPercentPic='url(\"./images/grossMarginPercent.png\")';	
$(document).ready(function() {
  	$("[name='billRate']").css('background-image', billRatePic +','+ nothingPic);
	$("[name='payRate']").css('background-image', payRatePic +','+ nothingPic);
	$("[name='markUp']").css('background-image', markUpPic +','+ nothingPic);
	$("[name='grossProfitMargin']").css('background-image', grossProfitMarginPic +','+ nothingPic);
	$("[name='grossMarginPercent']").css('background-image', grossMarginPercentPic +','+ nothingPic);
});	

	
/* Clear swiped Input plus all calculated Inputs */
$('[type="tel"]').bind('swipeleft',function(){
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

//$("#HomeButton").click

$('[type=tel],#HomeButton').bind('keydown keyup click change',function(){
	
	//var count = 0;
	//count++;
	 
 	/* DETERMINE WHAT TYPE OF INPUT/OUTPUT Get type of output/input, 1,2 or 3 (real)*/
	dataCurrent = $(this).attr('data-x');
	
	if (dataCurrent == '3'){  
		$(this).attr('data-x','1');
		$('[type=tel][data-x="2"]').not(this).attr('data-x','3');
		$('[type=tel][data-x="1"]').not(this).attr('data-x','2');
	}else if (dataCurrent == '2'){
		$(this).attr('data-x','1');
		$('[type=tel][data-x="1"]').not(this).attr('data-x','2');
	}else{/*Add error checking for version 2, with a data-x counter. if != default then reset*/}
	
		
	//code for adding equals background pic for when data=3
	//var payRatePic= $("[name='payRate']").css('background-image');
	
	//$(this).css({color:"black"});
	
	/***********************************OUTPUT STYLING********************************/
	$('[type=tel][data-x="3"]').css({color:"red"});
	$('[type=tel]').not("[data-x='3']").css({color:"blue"});
	
	//$('[type=tel][data-x=3]').addClass("equals"); no longer needed(didnt work)
	//Adds Equals when Calculated
	$("[name='billRate'][data-x='3']").css('background-image', billRatePic + ',' + equalsPic);
	$("[name='payRate'][data-x='3']").css('background-image', payRatePic + ',' + equalsPic);
	$("[name='markUp'][data-x='3']").css('background-image', markUpPic + ',' + equalsPic);
	$("[name='grossProfitMargin'][data-x='3']").css('background-image', grossProfitMarginPic + ',' + equalsPic);
	$("[name='grossMarginPercent'][data-x='3']").css('background-image', grossMarginPercentPic + ',' + equalsPic);
	
	$("[name='billRate']").not("[data-x='3']").css('background-image', billRatePic+','+nothingPic);
	$("[name='payRate']").not("[data-x='3']").css('background-image', payRatePic+','+nothingPic);
	$("[name='markUp']").not("[data-x='3']").css('background-image', markUpPic+','+nothingPic);
	$("[name='grossProfitMargin']").not("[data-x='3']").css('background-image', grossProfitMarginPic +','+nothingPic);
	$("[name='grossMarginPercent']").not("[data-x='3']").css('background-image', grossMarginPercentPic +','+nothingPic);
	
	
	
	
	
	/* console.log('payRatePic: ', payRatePic);
	console.log('equalsPic: ', equalsPic);
	 */
	/*****************************OUTPUT CALCULATIONS**********************************/
	//Get type of output/input, 1,2 or 3 
	dataBillRate = $("[type=tel][name='billRate']").attr('data-x');
	dataPayRate = $("[type=tel][name='payRate']").attr('data-x');
	dataMarkUp = $("[type=tel][name='markUp']").attr('data-x');
	dataGrossProfitMargin = $("[type=tel][name='grossProfitMargin']").attr('data-x');
	dataGrossMarginPercent = $("[type=tel][name='grossMarginPercent']").attr('data-x');
	
	
	/* SETTINGS VALUES SHOULD ALWAYS GO FIRST, WILL ALWAYS BE AVAILIBLE*/
	workersComp			= parseFloat($("[name='workersComp']").val().replace(/,/g, ''), 10);
	ficaAndFutaTax      = parseFloat($("[name='ficaAndFutaTax']").val().replace(/,/g, ''), 10);
	sui                 = parseFloat($("[name='sui']").val().replace(/,/g, ''), 10);
	other               = parseFloat($("[name='other']").val().replace(/,/g, ''), 10);
	fundingAndProcessing= parseFloat($("[name='fundingAndProcessing']").val().replace(/,/g, ''), 10);
	misc                = parseFloat($("[name='misc']").val().replace(/,/g, ''), 10);
	
	
	/*DETERMINE WHERE VALUES ARE COMING FROM*/
	/*
	if(dataBillRate == '3')
	billRate          	= (markUp + payRate) + 1; 
	else billRate          	= parseFloat( $("[name='billRate']").val().replace(/,/g, ''), 10);
	
	if(dataPayRate == '3')
	payRate           	= (billRate - markUp) + 1;
	else payRate           	= parseFloat( $("[name='payRate']").val().replace(/,/g, ''), 10);
	
	if(dataMarkUp == '3')
	markUp            	= (billRate - payRate) - 1; 
	else markUp            	= parseFloat($("[name='markUp']").val().replace(/,/g, ''), 10); 
    
	if(dataGrossProfitMargin == '3')
	grossProfitMargin 	= billRate-(payRate+(workersComp + ficaAndFutaTax + sui + other) + (fundingAndProcessing + misc));
    else grossProfitMargin 	= parseFloat($("[name='grossProfitMargin']").val().replace(/,/g, ''), 10);
	
	if(dataGrossMarginPercent == '3')
	grossMarginPercent	= (grossProfitMargin / billRate);
	else grossMarginPercent	= parseFloat($("[name='grossMarginPercent']").val().replace(/,/g, ''), 10);
	*/
	
	//console.log('billrate equals 3?' , $('[name="billRate"]').attr('data-x') == '3');
	/*
	 A = parseFloat($("input:text[name='AA']").val(),10);  //for refference
	*/
	/*
	billRate = profitMargin + payRate+ workersComp + ficaAndFutaTax + sui + other +fundingAndProcessing + misc;
	
	payRate   = billRate - grossProfitMargin -workersComp - ficaAndFutaTax - sui - other -fundingAndProcessing - misc;
	*/
	
	
	/*DETERMINE WHERE VALUES ARE COMING FROM ROUND TWO*/
	if(dataBillRate != '3' && dataPayRate != '3')
		{
		billRate          	= parseFloat( $("[name='billRate']").val().replace(/,/g, ''), 10);
		payRate           	= parseFloat( $("[name='payRate']").val().replace(/,/g, ''), 10);
		//done
		markUp              = (billRate - payRate) - 1; 
		grossProfitMargin   = billRate-(payRate+(workersComp + ficaAndFutaTax + sui + other) + (fundingAndProcessing + misc));
		grossMarginPercent	= (grossProfitMargin / billRate);
		}
	else if(dataBillRate != '3' && dataMarkUp != '3')
		{
		billRate          	= parseFloat( $("[name='billRate']").val().replace(/,/g, ''), 10);
		markUp            	= parseFloat($("[name='markUp']").val().replace(/,/g, ''), 10);
		//done
		payRate           	= (billRate - markUp) - 1;
		grossProfitMargin   = billRate-(payRate+(workersComp + ficaAndFutaTax + sui + other) + (fundingAndProcessing + misc));
		grossMarginPercent	= (grossProfitMargin / billRate);
		}
	else if(dataBillRate != '3' && dataGrossProfitMargin != '3')
		{
		billRate          	= parseFloat( $("[name='billRate']").val().replace(/,/g, ''), 10);
		grossProfitMargin 	= billRate-(payRate+(workersComp + ficaAndFutaTax + sui + other) + (fundingAndProcessing + misc));
		//done
		//payRate           	= (billRate - markUp) + 1; //where to get markup
		payRate   = billRate - grossProfitMargin -workersComp - ficaAndFutaTax - sui - other -fundingAndProcessing - misc;
		markUp              = (billRate - payRate) - 1; //
		grossMarginPercent	= (grossProfitMargin / billRate); //ok
		}
	else if(dataBillRate != '3' && dataGrossMarginPercent != '3')
		{
		billRate          	= parseFloat( $("[name='billRate']").val().replace(/,/g, ''), 10);
		grossMarginPercent	= parseFloat($("[name='grossMarginPercent']").val().replace(/,/g, ''), 10);
		//done
		//payRate             = (billRate - markUp) + 1; 
		payRate   = billRate - grossProfitMargin -workersComp - ficaAndFutaTax - sui - other -fundingAndProcessing - misc;
		markUp              = (billRate - payRate) - 1; 
		grossProfitMargin   = billRate-(payRate+(workersComp + ficaAndFutaTax + sui + other) + (fundingAndProcessing + misc));
		}
	else if(dataPayRate != '3' && dataMarkUp != '3')
		{
		payRate           	= parseFloat( $("[name='payRate']").val().replace(/,/g, ''), 10);
		markUp            	= parseFloat($("[name='markUp']").val().replace(/,/g, ''), 10);
		//done
		billRate          	= (markUp + payRate) + 1; 
		grossProfitMargin   = billRate-(payRate+(workersComp + ficaAndFutaTax + sui + other) + (fundingAndProcessing + misc));
		grossMarginPercent	= (grossProfitMargin / billRate);
		}
	else if(dataPayRate != '3' && dataGrossProfitMargin != '3')
		{
		payRate           	= parseFloat( $("[name='payRate']").val().replace(/,/g, ''), 10);
		grossProfitMargin 	= billRate-(payRate+(workersComp + ficaAndFutaTax + sui + other) + (fundingAndProcessing + misc));
		//done
		//billRate          	= (markUp + payRate) + 1;
		billRate = profitMargin + payRate+ workersComp + ficaAndFutaTax + sui + other +fundingAndProcessing + misc;
		markUp              = (billRate - payRate) - 1; 
		grossMarginPercent	= (grossProfitMargin / billRate);
		}
	else if(dataPayRate != '3' && dataGrossMarginPercent != '3')
		{
		payRate           	= parseFloat( $("[name='payRate']").val().replace(/,/g, ''), 10);
		grossMarginPercent	= parseFloat($("[name='grossMarginPercent']").val().replace(/,/g, ''), 10);
		//done
		//billRate          	= (markUp + payRate) + 1;
		billRate = profitMargin + payRate+ workersComp + ficaAndFutaTax + sui + other +fundingAndProcessing + misc;
		markUp              = (billRate - payRate) - 1;
		grossProfitMargin   = billRate-(payRate+(workersComp + ficaAndFutaTax + sui + other) + (fundingAndProcessing + misc));
		}
	else if(dataMarkUp != '3' && dataGrossProfitMargin != '3')
		{
		markUp            	= parseFloat($("[name='markUp']").val().replace(/,/g, ''), 10);
		grossProfitMargin 	= billRate-(payRate+(workersComp + ficaAndFutaTax + sui + other) + (fundingAndProcessing + misc));
		//senerio has not enough info
		billRate          	= (markUp + payRate) + 1;
		payRate           	= (billRate - markUp) - 1; 
		grossMarginPercent	= (grossProfitMargin / billRate);
		}
	else if(dataMarkUp != '3' && dataGrossMarginPercent != '3')
		{
		markUp            	= parseFloat($("[name='markUp']").val().replace(/,/g, ''), 10);
		grossMarginPercent	= parseFloat($("[name='grossMarginPercent']").val().replace(/,/g, ''), 10);
		//senerio has not enough info
		billRate          	= (markUp + payRate) + 1;
		payRate           	= (billRate - markUp) - 1;
		grossProfitMargin   = billRate-(payRate+(workersComp + ficaAndFutaTax + sui + other) + (fundingAndProcessing + misc));
		}
	else if(dataGrossProfitMargin != '3' && dataGrossMarginPercent != '3')
		{
		grossProfitMargin 	= billRate-(payRate+(workersComp + ficaAndFutaTax + sui + other) + (fundingAndProcessing + misc));
		grossMarginPercent	= parseFloat($("[name='grossMarginPercent']").val().replace(/,/g, ''), 10);
		//done if payRate formula is right
		billRate          	= grossMarginPercent / grossProfitMargin; //line done
		payRate   = billRate - grossProfitMargin -workersComp - ficaAndFutaTax - sui - other -fundingAndProcessing - misc;
		markUp              = (billRate - payRate) - 1; 
		}
	else {//this senerio should not happen
		billRate = "";
		payRate = "";
		markUp ="";
		grossProfitMargin = "";
		dataGrossMarginPercent = "";
	
		}
	
	
	//Sends calculated values to text outputs when data-x=3
	$('[type=tel][name="billRate"][data-x=3]').not(this).not('[data-x=2]').val('$' + billRate.toString());
	$('[type=tel][name="payRate"][data-x=3]').not(this).not('[data-x=2]').val('$' + payRate.toString());
	$('[type=tel][name="markUp"][data-x=3]').not(this).not('[data-x=2]').val(markUp.toString() +'%');
	$('[type=tel][name="grossProfitMargin"][data-x=3]').not(this).not('[data-x=2]').val('$'+ grossProfitMargin.toString());
	$('[type=tel][name="grossMarginPercent"][data-x=3]').not(this).not('[data-x=2]').val(grossMarginPercent.toFixed(2).toString()+'%');

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