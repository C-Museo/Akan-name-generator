
function generate()
{
    var  day = document.getElementById("day").value;
    var  month = document.getElementById("month").value;
    var  year = document.getElementById("year").value;
    if(day!="" || month !=""||year !="")
    {
    if(day <1|| day>31) {
      var err=document.getElementById("result"); 
      err.innerHTML = "Invalid day!";
      err.style.color="red";
       // return false;
    } 

    else if(month <1|| month>12) {
        
        var err=document.getElementById("result"); 
        err.innerHTML = "Invalid Month";
        err.style.color="red";
        //return false;
    } else {
        const str = ""+year; 
        var CC = str.slice(2);
        var YY= str.substring(0,2);
        var MM=month;
        var DD=day;
        
        var dow= ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;
        var num=Math.floor(dow);

        var ismale = document.getElementById("male").checked;
        var isfemale = document.getElementById("female").checked; 
        if(ismale==true)
        {
         if(num==0)   
         {
          var err=document.getElementById("result"); 
          err.innerHTML = "Hello Kwasi!";
          err.style.color="green";
         }
         else if(num==1)
         {
          var err=document.getElementById("result"); 
          err.innerHTML = "Hello Kwadwo";
          err.style.color="green";
         }
         else if(num==2)
         {
          var err=document.getElementById("result"); 
          err.innerHTML = "Hello Kwabena";
          err.style.color="green";
         }
         else if(num==3)
         {
          var err=document.getElementById("result"); 
          err.innerHTML = "Hello Kwaku!";
          err.style.color="green";
         }
         else if(num==4)
         {
          var err=document.getElementById("result"); 
          err.innerHTML = "Hello Yaw";
          err.style.color="green";
         }
         else if(num==5)
         {
          var err=document.getElementById("result"); 
          err.innerHTML = "Hello Kofi!";
          err.style.color="green";
         }
         else if(num==6)
         {
          var err=document.getElementById("result"); 
          err.innerHTML = "Hello Kwame!";
          err.style.color="green";
         }
        }
        else if(isfemale)
        {
         if(num==0)   
         {
          var err=document.getElementById("result"); 
          err.innerHTML = "Hello Akosua!";
          err.style.color="green";
         }
         else if(num==1)
         {
          var err=document.getElementById("result"); 
          err.innerHTML = "Hello Adwoa";
          err.style.color="green";
         }
         else if(num==2)
         {
          var err=document.getElementById("result"); 
          err.innerHTML = "Hello Abenaa!";
          err.style.color="green";
         }
         else if(num==3)
         {
          var err=document.getElementById("result"); 
          err.innerHTML = "Hello Akua";
          err.style.color="green";
         }
         else if(num==4)
         {
          var err=document.getElementById("result"); 
          err.innerHTML = "Hello Yaa!";
          err.style.color="green";
         }
         else if(num==5)
         {
          var err=document.getElementById("result"); 
            err.innerHTML = "Hello Afua!";
            err.style.color="green";
         }
         else if(num==6)
         {
           
            var err=document.getElementById("result"); 
            err.innerHTML = "Hello Ama!";
            err.style.color="green";
         }
        }
        
    }
  }
  else
  {
    var err=document.getElementById("result"); 
    err.innerHTML = "Fill all fields please!";
    err.style.color="red";
  }
    
}