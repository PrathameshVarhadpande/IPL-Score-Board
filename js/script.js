    var a;
    var b=0;
    var c=0;
    var d=0;
    
    function toss(){
        var a = Math.round(Math.random());
        if(a==0){
            alert("MUMBAI INDIANS won the toss!!!\n\nChoose your willing option (bat/field)...");
            b=b+1;
        }
        else{
            alert("CHENNAI SUPER KINGS won the toss!!!\n\nChoose your willing option (bat/field)...");
            
        }
    }
    function bat(){
        if(b==1){
            alert("MUMBAI INDIANS chose to bat first...");
            b=0;
        }
        else{
            alert("CHENNAI SUPER KINGS chose to bat first...");
        }
        
    }
    function field(){
        if(b==1){
            alert("MUMBAI INDIANS chose to field first...");
            b=0;
        }
        else{
            alert("CHENNAI SUPER KINGS chose to field first...");
        }
        
    }


    