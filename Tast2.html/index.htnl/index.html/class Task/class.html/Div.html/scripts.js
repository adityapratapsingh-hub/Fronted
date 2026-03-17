let s1=document.getElementById("sql1");
s1.addEventListener("mouseenter",function(){
s1.style.backgroundColor='red';
});

s1.addEventListener("mouseleave",function(){
s1.style.backgroundColor='white';
});

// let a=document.getElementById("sql");
// a.addEventListener("mouseenter",function(){
//     a.innerHTML='5';
// });



let a=document.getElementById("sql");
a.addEventListener("mouseenter",function(){
    let e=Math.floor(Math.random()*100);
    a.innerHTML=e;
});
a.addEventListener("mouseleave",function(){
    a.innerHTML='1';
});
