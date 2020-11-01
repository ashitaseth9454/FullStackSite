//function definition
function myFunc(){
    //Block of code
    console.log("I am a Function");
}
//function calling
myFunc();
myFunc();
myFunc();
myFunc();

function myFunc2(fname, lname){
    //Block of code
    console.log(fname+" "+lname);
}
myFunc2("Ashita","Seth");
myFunc2("Ashita");//second argument maon undefined hota hai kyuki argumentpass nahi kiya second vala
myFunc2("Ashita","Vijay","Seth")//sirf do hi value lega pehli do
//default argument agar kuch nahi diheja to no lname pass likh ke aayega
function myFunc3(fname, lname="no lname passed"){
    //Block of code
    console.log(fname+" "+lname);
}
 myFunc3("ashita");

 function myFunc4(num1,num2){
var t= num1+num2;
return t;
 }
 console.log(myFunc4(2,3))


 var counter=0;
 function inx(){
     counter++;

 }
 inx();
 inx();
 console.log(counter);


 function myFunc5(){
     var sum=0;
     for(i=0;i<arguments.length;i++){//jitne bhi arguements bheje unsabka sum ho jayega   arument.length se vo saare access ho agye jiten arguments daale hain andar
         sum +=arguments[i]
     }
     console.log(sum);
 }
 myFunc5(1,2,3,4)
 myFunc5(1,2)
 myFunc5(4,5,6)
 myFunc5("A","B")//0AB aayeg akyuki sum already 0 hai= 0+A+B=0AB
 myFunc5(2,2.3,3)
 

 function myFunc6(){
     var a=9;
     function myFunc7(){
         var b = 6;
         console.log(a);
     }
     //console.log(b)//ye vala nahi chalega error ayega kyuyki is vale b variable ka scole myFunc7 tak hi tha basuske bahar access nahi ar skte
     myFunc7();
 }
 myFunc6();


 var x=5;
 //function expression- has a block of code4 and semicolon whiek functio main block of coe to hota hai lekin semicolon nahi
//function main name hita hia, function expression main name nahi hota
 var s= function(x){//this is function expression, nam eki zaroorat nahi and no semi colon
     return(x*x);
 };
 
//another ay for function expression
 var r=()=>{console.log("heyyy");
};
console.log(r)
r();


//self calling function expression
(function(x){console.log(x)})(5);//self calling/closing function

(function(x,y){console.log(x+y)})(5,10);