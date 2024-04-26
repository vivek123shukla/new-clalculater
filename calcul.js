let text=document.getElementById('text');
let btn=document.querySelectorAll("button");
let str="";
let arr=Array.from(btn);
arr.forEach(function(button){
    button.addEventListener('click',(e)=>{
       if(e.target.innerHTML=='='){
        str=eval(str);
        text.value=str;
       } 
       else if(e.target.innerHTML=='AC'){
        str="";
        text.value=str;
       }else if(e.target.innerHTML=='DEL'){
        str=str.substring(0,str.length-1);
        text.value=str;
       }else{
        str+=e.target.innerHTML;
        text.value=str;
       }
    })
})

