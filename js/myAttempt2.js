
//when document ready

// $(document).ready(function(){

	// var InputCurr=0,
		// InputOld=0;
	// var Output=0;	
// });

	var AA = $('input:text[name="AA"]');
	var BB = $('input:text[name="BB"]');
	var CC = $('input:text[name="CC"]');
	
	var A = '';
	var B = '';
	var C = '';

		
//=================================================================AA===========================
$('input[name=AA]').bind(' keyup change',function(){
	
	

/* 	if ($("input:text[name='BB']").attr('data-x') == '1')
	{	
		$("input:text[name='BB']").attr('data-x', '2');
	}
	else if ($("input:text[name='BB']").attr('data-x') == '2')
	{	
		$("input:text[name='BB']").attr('data-x', '3');
	} */
	var myInput = $("input:text[name='BB']");
	var dataX = myInput.attr('data-x');
	var newVal;

	if (dataX == '1') {    
		newVal = '2';
	} else {
		if (dataX == '2') {    
			newVal = '3';
		}
	}
		
	myInput.attr('data-x', newVal);
	

		
	if ($("input:text[name='CC']").attr('data-x') == '1')	
	{	
		$("input:text[name='CC']").attr('data-x', '2');
	}
		//if another text input data-x == 2
	else if ($("input:text[name='CC']").attr('data-x') == '2')
	{	
		$("input:text[name='CC']").attr('data-x', '3');
	}
	
		
	// Flag AA as InputCurr or 1
	$("input:text[name='AA']").attr('data-x', '1');
	
	A = parseFloat($(':input[name="AA"]').val(),10);
	
	
	// if data-x == 3 calculate and Display=========================
	//if another text input data-x == 3
	if ($("input:text[name='BB']").attr('data-x') == '3')
	{	
	    B = (C - A);
    	//Display in field
		$(':input[name="BB"]').val(B.toString());
	}	
	
	//if another text input data-x == 3
	if ($("input:text[name='CC']").attr('data-x') == '3')
	{	
		C = (A + B);
    	//Display in field
		$(':input[name="CC"]').val(C.toString());
	}

});	

//=================================================================BB===========================
$('input[name=BB]').bind(' keyup change',function(){
	
	

	if ($("input:text[name='AA']").attr('data-x') == '1')
	{	
		$("input:text[name='AA']").attr('data-x', '2');
	}
	else if ($("input:text[name='AA']").attr('data-x') == '2')
	{	
		$("input:text[name='AA']").attr('data-x', '3');
	}
		
		
	if ($("input:text[name='CC']").attr('data-x') == '1')	
	{	
		$("input:text[name='CC']").attr('data-x', '2');
	}
	
	else if ($("input:text[name='CC']").attr('data-x') == '2')
	{	
		$("input:text[name='CC']").attr('data-x', '3');
	}
	
		
	// Flag BB as InputCurr or 1
	$("input:text[name='BB']").attr('data-x', '1');
	
	B = parseFloat($(':input[name="BB"]').val(),10);
	
	
	// if data-x == 3 calculate and Display==========================
	//if another text input data-x == 3
	if ($("input:text[name='AA']").attr('data-x') == '3')
	{	
	    A = (C - B);
    	//Display in field
		$(':input[name="AA"]').val(B.toString());
	}	
	
	//if another text input data-x == 3
	if ($("input:text[name='CC']").attr('data-x') == '3')
	{	
		C = (A + B);
    	//Display in field
		$(':input[name="CC"]').val(C.toString());
	}

});	
//=================================================================CC===========================

$('input[name=CC]').bind('keyup change',function(){
	if ($("input:text[name='AA']").attr('data-x') == '1')
	{	
		$("input:text[name='AA']").attr('data-x', '2');
	}
		//if another text input data-x == 2
	else if ($("input:text[name='AA']").attr('data-x') == '2')
	{	
		$("input:text[name='AA']").attr('data-x', '3');
	}
		
		
	if ($("input:text[name='BB']").attr('data-x') == '1')	
	{	
		$("input:text[name='BB']").attr('data-x', '2');
	}
		//if another text input data-x == 2
	else if ($("input:text[name='BB']").attr('data-x') == '2')
	{	
		$("input:text[name='BB']").attr('data-x', '3');
	}
	
		
	// Flag CC as InputCurr or 1
	$("input:text[name='CC']").attr('data-x', '1');
	
	C = parseFloat($(':input[name="CC"]').val(),10);
	
	
	// if data-x == 3 calculate and Display======================================
	//if another text input data-x == 3
	if ($("input:text[name='AA']").attr('data-x') == '3')
	{	
	    A = (C - B);
    	//Display in field
		$(':input[name="AA"]').val(B.toString());
	}	
	
	//if another text input data-x == 3
	if ($("input:text[name='BB']").attr('data-x') == '3')
	{	
	    B = (C - A);
    	//Display in field
		$(':input[name="BB"]').val(B.toString());
	}	

});	

function figureItOut()
{

	//if another text input is flagged as 2 set it to 3
	
	
	
	//var d = document.getElementById("d1"); 
	//d.setAttribute("align", "center");
	//
	
	//Mark Field as InputCurr data-x=1
	//element.setAttribute('data-x', '1')
	//Mark previous InputCurr as InputOld data-x=2
	//Mark previous InputOld as Output data-x=3
	//Make all other fields Output
	
	//call smart function that checks if InputCurr or InputOld for each field
	//function takes in attributes of field
	//if InputCurr or InputOld ?ignore?
	//if flagged Output
	//change css style,
	//calculate function and set to textbox
	//elem.getAttribute('data-x')
	//element.setAttribute('data-x', 'things')
	//$("input:text[name='AA']").attr('data-x', '1');
//a=data-x
//if ()a == 1 || a==2)
//{
// do nothing	
//}
//else
// calculate


}
	
	
// NOTES
	
	// $('input[name=AA]').bind('keypress keydown keyup change',function(){
	
	
	// //console.log( $('input[name=AA]').data('x') );
	// /*
	// if (BB.data('x') == '1')   {
    // BB.data('x', '2');
	// }	*/
	// //var BB = $("input:text[name='BB']");
	

	
	// //$('input[name=AA]').data('x');
	// //if another text input data-x == 1
	// //if ( BB.data("x") == '1')
	// if ($("input:text[name='BB']").attr('data-x') == '1')
	
	// {	
		// //set previous 1 to 2
		// //BB.data("x","2");
		// $("input:text[name='BB']").attr('data-x', '2');
	// }
	
	// //if another text input data-x == 2
	// if ($("input:text[name='BB']").attr('data-x') == '2')
	// {	
		// $("input:text[name='BB']").attr('data-x', '3');
		// //set previous 2 to 3
		// //BB.data("x","3");
		// //$("input:text[name='BB']").attr('data-x', '3');
	// }
		
		
	// if ($("input:text[name='CC']").attr('data-x') == '1')	
	// {	
		// //set previous 1 to 2
		// //CC.data("x","2");
		// $("input:text[name='CC']").attr('data-x', '2');
	// }
	
	// //if another text input data-x == 2
	// if ($("input:text[name='CC']").attr('data-x') == '2')
	// {	
		// $("input:text[name='CC']").attr('data-x', '3');
		// //set previous 2 to 3
		// //CC.data("x","3");
		// //$("input:text[name='CC']").attr('data-x', '3');
	// }
	
		
	// // Flag AA as InputCurr or 1
	// $("input:text[name='AA']").attr('data-x', '1');
	
	// A = parseFloat($(':input[name="AA"]').val(),10);
	
	
	// // if data-x == 3 calculate and Display==============================================================
	// //if another text input data-x == 3
	// if ($("input:text[name='BB']").attr('data-x') == '3')
	// {	
		
        // B = (C - A);
    	// //Display in field
		// $(':input[name="BB"]').val(B.toString());
	// }	
	
	// //if another text input data-x == 3
	// if ($("input:text[name='CC']").attr('data-x') == '3')
	// {	
		// C = (A + B);
    	// //Display in field
		// $(':input[name="CC"]').val(C.toString());
	// }

// });	

	
