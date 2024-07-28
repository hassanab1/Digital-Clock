let hour=document.querySelector(".Hour");
let minute=document.querySelector(".min");
let second = document.querySelector(".sec");

function updateclock(){
    hour.innerText= new Date().getHours();
    if(hour.innerText>12){
        hour.innerText= new Date().getHours() - 12;
    }else{
        hour.innerText= 12 - new Date().getHours();
    }
    if(hour.innerText.length==1){
        hour.prepend(0);
    }
    minute.innerText= new Date().getMinutes();
    if(minute.innerText.length==1){
        minute.prepend(0);
    }
    second.innerText=new Date().getSeconds();
    if(second.innerText.length==1){
        second.prepend(0);
    }
}

setInterval(updateclock, 1000);
updateclock();
