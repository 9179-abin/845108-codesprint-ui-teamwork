var newUser = [];
    
    function validateForm() {
        if(localStorage.getItem('users')){
            var data = localStorage.getItem('users');
            data=JSON.parse(data)
            for(obj of data){
                newUser.push(obj)
            }
        }
    var i=0;
    var Sl_No =++i;
    var Amount=document.forms["myForm"]["someid"].value+"." +document.forms["myForm"]["pais"].value;
    var Shipping_Address=document.forms["myForm"]["shippingadd"].value;
    var City=document.forms["myForm"]["city"].value;
    
    var Country=document.forms["myForm"]["country"].value;
    
    var Buyers_Name=document.forms["myForm"]["bfirstname"].value+" "+document.forms["myForm"]["blastname"].value;
    
    var Phone=document.forms["myForm"]["a"].value+
                        document.forms["myForm"]["b"].value+
                        document.forms["myForm"]["c"].value+
                        document.forms["myForm"]["d"].value+
                        document.forms["myForm"]["e"].value+
                        document.forms["myForm"]["f"].value+
                        document.forms["myForm"]["g"].value+
                        document.forms["myForm"]["h"].value+
                        document.forms["myForm"]["i"].value+
                        document.forms["myForm"]["j"].value;



    var data = new Object({
        Sl_No,
        Buyers_Name,
        Shipping_Address,
        City,
        Amount,
        Phone
    });
   
    newUser.push(data)
    
      
    if (Buyers_Name!='') {
        localStorage.setItem('users', JSON.stringify(newUser));
    }
}