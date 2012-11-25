$(':input').bind('keypress keydown keyup change',function(){

	//Mark Field as Input
	
	//Mark previous field as Input
	//Make all other fields Output
	
	//Set all values that you need for making a calculation
    var AA = parseFloat($(':input[name="AA"]').val(),10),
        BB = parseFloat($(':input[name="BB"]').val(),10);
        /*CC = parseFloat($(':input[name="CC"]').val());*/
	
	
	
	//If Output-Field 
	//if()
	//{
	//run calculation for your respected field
	
	//}
	
	//Check to see if field is Output or Input
	
	

	
           
    var v = '';
        v = (AA + BB);
    
	//Display in field
    $(':input[name="CC"]').val(v.toString());

	
});



