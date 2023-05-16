var string="";
let buttons=document.querySelectorAll('button');
let inp=document.querySelector(".input");
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(e.target);
        if(e.target.innerHTML=='='){
            string=eval(string);
            inp.value=string;
        }
       else if(e.target.innerHTML=='AC'){
            string=" ";
            inp.value=string;
        }
       else if(e.target.innerHTML=='X'){
          let str=inp.value.toString();
          console.log(str);
          inp.value=str.slice(0,-1)
          string=inp.value;
        }
        else{
            string = string+ e.target.innerHTML;
            console.log(string);
            inp.value=string;
            }
    })      
})