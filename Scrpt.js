 function Naming(){
    var a=document.getElementById("name");
    
    if(a.value.length<=5)
    {
        document.getElementById("N1").style.visibility="visible";
    }
    else{
        document.getElementById("N1").style.visibility="hidden";
    }
    
}
function Email(){
    var c=document.getElementById("email");
    var regx=/^([a-z A-Z 0-9 \.]+)@([a-z A-Z 0-9]+)\.([a-z A-z]{2,20})$/;
    if(regx.test(c.value))
    {
        document.getElementById("E1").style.visibility="hidden";
    }
    else{
        document.getElementById("E1").style.visibility="visible";
    }
}
function Password(){
      var d=document.getElementById("password");
      if(d.value.length>=8){
          document.getElementById("p1").style.visibility="hidden";
      }
      else{
        document.getElementById("p1").style.visibility="visible";
      }
      
}

function Confirm(){
    var e=document.getElementById("password");
    var f=document.getElementById("cp");
    if(e.value==f.value){
        document.getElementById("p2").style.visibility="hidden";
        document.getElementsById("ok").style.visibility="visible";
    }
    else
    {
      document.getElementById("p2").style.visibility="visible";    
      document.getElementById("remove").style.visibility="visible";
    }
}
  function count()
  {
     var x=document.getElementById("text").value.length;
     if(140-x>=0)
     {
        document.getElementById("num").innerHTML=140-x;
     }

 }
 function date(){
    var f=new Date();
    var currentyear=f.getFullYear();
     var h=document.getElementById("dates").value;
     var g=new Date(h);
     var year=g.getFullYear();
     var b=currentyear-year;
    if(b<18){
        document.getElementById("age").style.visibility="visible";
    }
    else
    {
      document.getElementById("age").style.visibility="hidden";
    }

 }

