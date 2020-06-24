var status = 0
for(var ind = 0; ind < 5; ind++) {
  setTimeout( function timer(){
        console.log(status)  
        status = 1 - status
        }, ind*1000 );
    if (status = 0){
        document.getElementById(1)
    }
    else{
        document.getElementById(1)
    } 
};
