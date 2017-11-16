'use strict';

function populateSelect(){
    var obj=$('#select1');  
    var opt;   
    var o = new Option("option text", "value");
    /// jquerify the DOM object 'o' so we can use the html method
    $(o).html("option text");    
                
        obj.append(o);
    
}
populateSelect();

