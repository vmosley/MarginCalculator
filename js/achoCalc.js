$(':input').bind('keypress keydown keyup change',function(){
    var AA = parseFloat($(':input[name="AA"]').val(),10),
        BB = parseFloat($(':input[name="BB"]').val(),10);
            
    var v = '';
    
        v = (AA + BB);
    
    $(':input[name="CCC"]').val(v.toString());
});