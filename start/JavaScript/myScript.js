
    console.log("dont know");
   //alert('gfh');
    var x = document.getElementById('container');
    console.log(x);  //printing txt
    //changing CSS
    x.style.width='200px';   
    x.style.height= '200px';
    x.style.backgroundColor= 'red';
    x.innerHTML="Text Added Dynamically";//adding text
    x.style.color='White';
    x.style.textAlign='center';
    x.style.marginBottom='30px';

    var y = document.getElementById('btn');
    console.log("btn");
    y.onclick =function(){  //doing thijgs when we click on the button
       // alert('button clicked');
        x.style.backgroundColor='skyblue';   //changing colour
    }
