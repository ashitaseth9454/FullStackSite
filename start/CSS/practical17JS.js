const time=document.getElementById('time');
const greet = document.getElementById('greet');
const name = document.getElementById('text');
const date =document.getElementById('date');
name.innerHTML=`[Enter Name]`;
name.addEventListener("keypress",setName);
name.addEventListener("blur",setName);
getName();
let today =new Date();

function show(){
   
    let hour = today.getHours();
    let minutes=today.getMinutes();
    let seconds =today.getSeconds();
    let dateToday = today.toDateString();
    const amPmCheck =hour>12?'PM':'AM';
    hour =hour%12 || 12;
    time.innerHTML=`${Zero(hour)}<span>:</span>${Zero(minutes)}<span>:</span>${Zero(seconds)}${amPmCheck}`;
    date.innerHTML=`${dateToday}`;
    setTimeout(show,1000);

}

function Zero(n){
    
    return (parseInt(n,10)<10?"0":"")+n;
}

function greeting(){
    
    let hour =today.getHours();
    if(hour<12){
        document.body.style.backgroundSize="cover";
        document.body.style.backgroundImage='url(../CSS/prac17Images/morning.jpg)';
        greet.innerHTML="Good Morning";
        document.body.style.color="white";
    }
    else if(hour<16){
        document.body.style.backgroundSize="cover";
        document.body.style.backgroundImage='url(../CSS/prac17Images/afternoon.jpg)';
        greet.innerHTML="Good Afternoon";
        document.body.style.color="white";

    }
    else if(hour<19){
        document.body.style.backgroundSize="cover";
        document.body.style.backgroundImage='url(../CSS/prac17Images/evening.jpg)';
        greet.innerHTML="Good Evening";
        document.body.style.color="white";
    }
    else{
        document.body.style.backgroundSize="cover";
        document.body.style.backgroundImage='url(../CSS/prac17Images/night.jpg)';
        greet.innerHTML="Good Night";
        document.body.style.color="white";
    }

}
function getName(){
    if(localStorage.getItem("mykeyname")==null){
        name.innerHTML =`[Enter Name]`;
    }
    else{
        name.innerHTML=localStorage.getItem("mykeyname");
    }
}
function setName(e){
    if(e.type === "keypress"){
        if(e.keyCode==13){
            localStorage.setItem("mykeyname",e.target.innerHTML);
            name.blur();
        }
    }
        else{
            localStorage.setItem("mykeyname",e.target.innerHTML);
        }
    
}
greeting();
show();
getName();