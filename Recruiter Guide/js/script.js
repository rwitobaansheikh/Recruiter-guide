
var arr = ["https://www.youtube.com/embed/AQ2Nm1doZow","https://www.youtube.com/embed/AGWTYuBn4rM", "https://www.youtube.com/embed/h1o_pz3MRWo", "https://www.youtube.com/embed/mABIcEXtEzs", "https://www.youtube.com/embed/2JpkMXinO1M"];
i=0;
k=0;

window.onload = function question(){
    for(k=0;k<arr.length;k++){
        
        document.getElementById("qs").innerHTML += "<button href='#'> Q" +(k+1)+"</button>";
    }
    
}
function Nextques() {
    i+=1;
    if(i<arr.length){
        document.getElementById("mainImg").src = arr[i];
    }
    else{
        alert("This is the last video"); 
        i-=1;
    }
  }
function Prevques() {
    i -= 1;
    if(i>=0){
        document.getElementById("mainImg").src = arr[i];
    }
    else{
        alert("This is the first video");
        i+=1;   
        //document.getElementById("video").innerHTML="This is the first video";
    }
}


