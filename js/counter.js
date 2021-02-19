var mi_runs=0;
var csk_runs=0;
function onerun(a){
    if(a==1){
        mi_runs=mi_runs+1;
        document.getElementById("runs").innerHTML=mi_runs;
    }
    else{
        csk_runs=csk_runs+1;
        document.getElementById("runs1").innerHTML=csk_runs;
    }
}
function tworun(a){
    if(a==1){
        mi_runs=mi_runs+2;
        document.getElementById("runs").innerHTML=mi_runs;
    }
    else{
        csk_runs=csk_runs+2;
        document.getElementById("runs1").innerHTML=csk_runs;
    }
}
function threerun(a){
    if(a==1){
        mi_runs=mi_runs+3;
        document.getElementById("runs").innerHTML=mi_runs;
    }
    else{
        csk_runs=csk_runs+3;
        document.getElementById("runs1").innerHTML=csk_runs;
    }
}
function fourrun(a){
    if(a==1){
        mi_runs=mi_runs+4;
        document.getElementById("runs").innerHTML=mi_runs;
        var audio= new Audio("audio/mi.mp3");
        audio.play();
    }
    else{
        csk_runs=csk_runs+4;
        document.getElementById("runs1").innerHTML=csk_runs;
        var audio= new Audio("audio/csk.mp3");
        audio.play();
    }
}
function sixrun(a){
    if(a==1){
        mi_runs=mi_runs+6;
        document.getElementById("runs").innerHTML=mi_runs;
        var audio= new Audio("audio/mi.mp3");
        audio.play();
    }
    else{
        csk_runs=csk_runs+6;
        document.getElementById("runs1").innerHTML=csk_runs;
        var audio= new Audio("audio/csk.mp3");
        audio.play();
    }
}
function deduct(a){
    if(a==1){
        mi_runs=mi_runs-1;
        document.getElementById("runs").innerHTML=mi_runs;
    }
    else{
        csk_runs=csk_runs-1;
        document.getElementById("runs1").innerHTML=csk_runs;
    }
}