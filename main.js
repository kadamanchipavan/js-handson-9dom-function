//1Q

let a=document.getElementById("text")
console.log(a);


//2Q
 let b=document.getElementsByTagName("h1")
 console.log(b);

 //3Q

 let c=document.getElementsByClassName("box")
 console.log(c);

 //4Q

 let element= document.getElementById("change");
 setTimeout(()=>{
element.innerText="HELLO WORLD"
 })

 //5Q
 let dir=document.querySelector('#dir');
 dir.addEventListener('click',function(){
   let direction=document.querySelector('.flexcontainer');
   if(direction.style.flexDirection=='column'){
      direction.style.flexDirection='row';
   }else{
      direction.style.flexDirection='column';
   }
 })

 //7Q
 document.querySelector('h3').style.color='blue';
 document.querySelector('h3').setAttribute('id','headingg')


 //8Q
 function changetext(){
    document.getElementById('change1').innerText="WELCOME TO ELEVATION ACADAMY"
 }

 //9Q
 function time(){
   let dt= new Date();
   let hrs= dt.getHours();
   let min = dt.getMinutes();
   let sec =dt.getSeconds();

   document.getElementById("hr").innerHTML = hrs +":";
   document.getElementById("Min").innerHTML = min+":";
   document.getElementById("sec").innerHTML = sec; 
    
 }
 setInterval(time,1000)
 function yeear(){
   let sel=document.getElementById("years");
   let msg=sel.options[sel.selectedIndex].text;
   document.querySelector("#selvalue").innerHTML=msg;
 }
 document.querySelector("#selbtn").addEventListener('click',function(){yeear()})