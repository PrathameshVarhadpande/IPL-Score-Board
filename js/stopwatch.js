var min = 0	;
var smin = 2 ;
var sec = 0;
var msec = 0; 

function iplmusic(){
	var audio = new Audio("audio/ipl_new.mp3")
  	audio.play();
}
function starttime(){
  
  var disable_button = document.getElementsByClassName("disable");
  disable_button[0].disabled=false;
  disable_button[1].disabled=false;
  disable_button[2].disabled=false;
  disable_button[3].disabled=false;
  disable_button[4].disabled=false;
  disable_button[5].disabled=false;
  disable_button[6].disabled=false;
  disable_button[7].disabled=false;
  disable_button[8].disabled=false;
  disable_button[9].disabled=false;
  disable_button[10].disabled=false;
  disable_button[11].disabled=false;

    setTimeout(
      function(){
			document.getElementById("min").innerHTML=min;  
			document.getElementById("smin").innerHTML=smin;
			document.getElementById("msec").innerHTML=msec;
			document.getElementById("sec").innerHTML=sec;

			msec = msec - 1;
			if(msec<0){
				sec = sec - 1;
				msec = 9;
			}
			if(sec<0){
				smin = smin - 1;
				sec = 5;
			}
			if(smin<0){
				min = min - 1;
				smin = 9;
			}
			if(min<0){
				alert("Match Over!");
        if(mi_runs>csk_runs){
          alert("MUMBAI INDIANS WON THE MATCH!!!")
        }
        if(csk_runs>mi_runs){
          alert("CHENNAI SUPER KINGS WON THE MATCH!!!")
        }
        if(mi_runs==csk_runs){
          alert("MATCH TIED!!!")
        }
				window.location.href="index.html";
			}
			starttime();
		},
		1000
		)
}
