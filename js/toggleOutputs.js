//[type=tel] can replace [type=tel]
//	$('input[type=text]:not([data-x=1])')
//$("[type=tel][data-x='3']").each(function() { do something } );    //just for reference
//when padding is 100 clear and reset padding
//$("input[name=AA]").addClass("selected");

/**************INITAL STYLING******************************/
$(document).ready(function() {
	var nothingPic='url(\"./images/nothing.png\")';
	var equalsPic= 'url(\"./images/equals.png\")';
	
	var billRatePic='url(\"./images/billRate.png\")';
	var payRatePic='url(\"./images/payRate.png\")';
	var markUpPic='url(\"./images/markUpPercent.png\")';
	var grossProfitMarginPic='url(\"./images/grossProfitMargin.png\")';
	var grossMarginPercentPic='url(\"./images/grossMarginPercent.png\")';	
	
	var billRate          = "";
	var payRate           = "";
	var markUp            = "";
  	var grossProfitMargin = "";
	var grossMarginPercent= "";
	
  	$("[name='billRate']").css('background-image', billRatePic +','+ nothingPic).setCaretPosition(12);
	$("[name='payRate']").css('background-image', payRatePic +','+ nothingPic).setCaretPosition(12);
	$("[name='markUp']").css('background-image', markUpPic +','+ nothingPic).setCaretPosition(12);
	$("[name='grossProfitMargin']").css('background-image', grossProfitMarginPic +','+ nothingPic).setCaretPosition(12);
	$("[name='grossMarginPercent']").css('background-image', grossMarginPercentPic +','+ nothingPic).setCaretPosition(12);
	
});		

//CLEAR ALL BUTTON
$('#clearAll').click(function(){
	$('[data-x="3"],[data-x="2"],[data-x="1"]').stop().animate({'padding-right':250},'fast',function(){
		$(this).css({'padding-right':10});
		$(this).val('');
		});

});



//SWIPE DELETE	
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

//SETS UP FOR PROPER HIGHLIGHTING
$("[type='tel']").focus(function() {
		$(this).addClass("curFocus");
	});
	
$("[type='tel']").blur(function() {
		$(this).removeClass("curFocus");
	});	
	




// NEW CODE***************************************************************
$('[type=tel]').bind('click keydown keyup ',function(){
	
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
	
		
	/***********************************OUTPUT STYLING********************************/
	
	/*COLOR OFTEXT DEPENDS ON IF GENERATED-OUTPUT OR USER-INPUT*/
	$('[type=tel][data-x="3"]').css({color:"red"});
	$('[type=tel]').not("[data-x='3']").css({color:"blue"});
	
	/*ADDS EQUALS PICTURE WHERE CALCULATED*/
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
	
		
	/*****************************OUTPUT CALCULATIONS**********************************/
	/*GETS TYPE OF OUTPUT 1,2 OR 3*/
	dataBillRate = $("[type=tel][name='billRate']").attr('data-x');
	dataPayRate = $("[type=tel][name='payRate']").attr('data-x');
	dataMarkUp = $("[type=tel][name='markUp']").attr('data-x');
	dataGrossProfitMargin = $("[type=tel][name='grossProfitMargin']").attr('data-x');
	dataGrossMarginPercent = $("[type=tel][name='grossMarginPercent']").attr('data-x');
	
	
	/* SETTINGS VALUES: THESE SHOULD ALWAYS GO FIRST, WILL ALWAYS BE AVAILIBLE*/
	workersComp			= parseFloat($("[name='workersComp']").val().replace(/,/g, ''), 10);
	ficaAndFutaTax      = parseFloat($("[name='ficaAndFutaTax']").val().replace(/,/g, ''), 10);
	sui                 = parseFloat($("[name='sui']").val().replace(/,/g, ''), 10);
	other               = parseFloat($("[name='other']").val().replace(/,/g, ''), 10);
	fundingAndProcessing= parseFloat($("[name='fundingAndProcessing']").val().replace(/,/g, ''), 10);
	misc                = parseFloat($("[name='misc']").val().replace(/,/g, ''), 10);
	
	
	/*DETERMINES WHAT TWO INPUTS ARE MANUALLY ENTERED FROM USER */
	/*TEN SENERIOS*/
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
		billRate			= grossProfitMargin + payRate+ workersComp + ficaAndFutaTax + sui + other +fundingAndProcessing + misc;
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
		/*billRate          	= (markUp + payRate) + 1;
		payRate           	= (billRate - markUp) - 1; 
		grossMarginPercent	= (grossProfitMargin / billRate);*/
		}
	else if(dataMarkUp != '3' && dataGrossMarginPercent != '3')
		{
		markUp            	= parseFloat($("[name='markUp']").val().replace(/,/g, ''), 10);
		grossMarginPercent	= parseFloat($("[name='grossMarginPercent']").val().replace(/,/g, ''), 10);
		//senerio has not enough info
		/*billRate          	= (markUp + payRate) + 1;
		payRate           	= (billRate - markUp) - 1;
		grossProfitMargin   = billRate-(payRate+(workersComp + ficaAndFutaTax + sui + other) + (fundingAndProcessing + misc));
		*/
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
	
	
	 //console.log("billRate :", billRate);
		
	/*SENDS CALCULATED VALUES TO TEXT OUTPUTS WHEN data-x=3 */
	/*If NaN, HIGHLIGHT RED AND DONT DISPLAY NaN*/
	if(isNaN(billRate.toString()))
		$('[type="tel"][name="billRate"][data-x="3"]').not(this).not('[data-x="2"]').val("").removeClass('red').addClass('red')
		else {
			$('[type="tel"][name="billRate"][data-x="3"]').not(this).not('[data-x="2"]').val('$' + billRate.toString());
			$('[name="billRate"]').removeClass('red');
			}
	
	if(isNaN(payRate.toString()))
		$('[type="tel"][name="payRate"][data-x="3"]').not(this).not('[data-x="2"]').val("").removeClass('red').addClass('red')
		else {
			$('[type="tel"][name="payRate"][data-x="3"]').not(this).not('[data-x="2"]').val('$' + payRate.toString()).removeClass('red');
			$('[name="payRate"]').removeClass('red');
			}
	
	if(isNaN(markUp.toString()))
		$('[type="tel"][name="markUp"][data-x="3"]').not(this).not('[data-x="2"]').val("").removeClass('red').addClass('red')
		else {
			$('[type="tel"][name="markUp"][data-x="3"]').not(this).not('[data-x="2"]').val(markUp.toString());
			$('[name="markUp"]').removeClass('red');
			}
	if(isNaN(grossProfitMargin.toString()))
		$('[type="tel"][name="grossProfitMargin"][data-x="3"]').not(this).not('[data-x="2"]').val("").removeClass('red').addClass('red')
		else {
			$('[type="tel"][name="grossProfitMargin"][data-x="3"]').not(this).not('[data-x="2"]').val('$'+ grossProfitMargin.toString());
			$('[name="grossProfitMargin"]').removeClass('red');
			}
	if(isNaN(grossMarginPercent.toString()))
		$('[type="tel"][name="grossMarginPercent"][data-x="3"]').not(this).not('[data-x="2"]').val("").removeClass('red').addClass('red')
		else {
			$('[type="tel"][name="grossMarginPercent"][data-x="3"]').not(this).not('[data-x="2"]').val(grossMarginPercent.toFixed(2).toString());
			$('[name="grossMarginPercent"]').removeClass('red');
			}
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


/////////myCalc


$('[data-DigitB]').bind('click',function(){

		newDigit = this.textContent;
		currentInput.value += newDigit;
});

//var currentInput = $('#billRate')[0];

$('input[type=tel]').focus(function () {
    currentInput = this;
});

//TODO: ON-SCREEN BUTTONS CODE (NEEDED WHEN data-x="1")
$('[data-Digit]').bind('click',function(){

		newDigit = this.textContent;
		currentInput.value += newDigit;

		
		//trying something
		

	
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
	
	
	
	//$('[data-x="1"]').val(currentInput.value);
	//code for adding equals background pic for when data=3
	//var payRatePic= $("[name='payRate']").css('background-image');
	
		
	/***********************************OUTPUT STYLING********************************/
	
	/*COLOR OFTEXT DEPENDS ON IF GENERATED-OUTPUT OR USER-INPUT*/
	$('[type=tel][data-x="3"]').css({color:"red"});
	$('[type=tel]').not("[data-x='3']").css({color:"blue"});
	
	/*ADDS EQUALS PICTURE WHERE CALCULATED*/
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
	
		
	/*****************************OUTPUT CALCULATIONS**********************************/
	/*GETS TYPE OF OUTPUT 1,2 OR 3*/
	dataBillRate = $("[type=tel][name='billRate']").attr('data-x');
	dataPayRate = $("[type=tel][name='payRate']").attr('data-x');
	dataMarkUp = $("[type=tel][name='markUp']").attr('data-x');
	dataGrossProfitMargin = $("[type=tel][name='grossProfitMargin']").attr('data-x');
	dataGrossMarginPercent = $("[type=tel][name='grossMarginPercent']").attr('data-x');
	
	
	/* SETTINGS VALUES: THESE SHOULD ALWAYS GO FIRST, WILL ALWAYS BE AVAILIBLE*/
	workersComp			= parseFloat($("[name='workersComp']").val().replace(/,/g, ''), 10);
	ficaAndFutaTax      = parseFloat($("[name='ficaAndFutaTax']").val().replace(/,/g, ''), 10);
	sui                 = parseFloat($("[name='sui']").val().replace(/,/g, ''), 10);
	other               = parseFloat($("[name='other']").val().replace(/,/g, ''), 10);
	fundingAndProcessing= parseFloat($("[name='fundingAndProcessing']").val().replace(/,/g, ''), 10);
	misc                = parseFloat($("[name='misc']").val().replace(/,/g, ''), 10);
	
	
	/*DETERMINES WHAT TWO INPUTS ARE MANUALLY ENTERED FROM USER */
	/*TEN SENERIOS*/
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
		billRate			= grossProfitMargin + payRate+ workersComp + ficaAndFutaTax + sui + other +fundingAndProcessing + misc;
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
		/*billRate          	= (markUp + payRate) + 1;
		payRate           	= (billRate - markUp) - 1; 
		grossMarginPercent	= (grossProfitMargin / billRate);*/
		}
	else if(dataMarkUp != '3' && dataGrossMarginPercent != '3')
		{
		markUp            	= parseFloat($("[name='markUp']").val().replace(/,/g, ''), 10);
		grossMarginPercent	= parseFloat($("[name='grossMarginPercent']").val().replace(/,/g, ''), 10);
		//senerio has not enough info
		/*billRate          	= (markUp + payRate) + 1;
		payRate           	= (billRate - markUp) - 1;
		grossProfitMargin   = billRate-(payRate+(workersComp + ficaAndFutaTax + sui + other) + (fundingAndProcessing + misc));
		*/
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
	
	
	 //console.log("billRate :", billRate);
		
	/*SENDS CALCULATED VALUES TO TEXT OUTPUTS WHEN data-x=3 */
	/*If NaN, HIGHLIGHT RED AND DONT DISPLAY NaN*/
	if(isNaN(billRate.toString()))
		$('[type="tel"][name="billRate"][data-x="3"]').not(this).not('[data-x="2"]').val("").removeClass('red').addClass('red')
		else {
			$('[type="tel"][name="billRate"][data-x="3"]').not(this).not('[data-x="2"]').val('$' + billRate.toString());
			$('[name="billRate"]').removeClass('red');
			}
	
	if(isNaN(payRate.toString()))
		$('[type="tel"][name="payRate"][data-x="3"]').not(this).not('[data-x="2"]').val("").removeClass('red').addClass('red')
		else {
			$('[type="tel"][name="payRate"][data-x="3"]').not(this).not('[data-x="2"]').val('$' + payRate.toString()).removeClass('red');
			$('[name="payRate"]').removeClass('red');
			}
	
	if(isNaN(markUp.toString()))
		$('[type="tel"][name="markUp"][data-x="3"]').not(this).not('[data-x="2"]').val("").removeClass('red').addClass('red')
		else {
			$('[type="tel"][name="markUp"][data-x="3"]').not(this).not('[data-x="2"]').val(markUp.toString());
			$('[name="markUp"]').removeClass('red');
			}
	if(isNaN(grossProfitMargin.toString()))
		$('[type="tel"][name="grossProfitMargin"][data-x="3"]').not(this).not('[data-x="2"]').val("").removeClass('red').addClass('red')
		else {
			$('[type="tel"][name="grossProfitMargin"][data-x="3"]').not(this).not('[data-x="2"]').val('$'+ grossProfitMargin.toString());
			$('[name="grossProfitMargin"]').removeClass('red');
			}
	if(isNaN(grossMarginPercent.toString()))
		$('[type="tel"][name="grossMarginPercent"][data-x="3"]').not(this).not('[data-x="2"]').val("").removeClass('red').addClass('red')
		else {
			$('[type="tel"][name="grossMarginPercent"][data-x="3"]').not(this).not('[data-x="2"]').val(grossMarginPercent.toFixed(2).toString());
			$('[name="grossMarginPercent"]').removeClass('red');
			}
});	


