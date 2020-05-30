var text;
var welcome;  
    var date = new Date();  
    var hour = date.getHours();  
    var minute = date.getMinutes();  
    var second = date.getSeconds();  
    if (minute < 10) {  
      minute = "0" + minute;  
    }  
    if (second < 10) {  
      second = "0" + second;  
    }  
    if (hour < 12) {  
      welcome = "Good Morning";  
    } else if (hour < 17) {  
      welcome = "Good Afternoon";  
    } else {  
      welcome = "Good Evening";  
    }  
    
      
$(document).ready(function() {
  if(sessionStorage.getItem("name")===null)
  {
    text=prompt("Welcome to Mediline Diagnostics, enter your name:","User");
    sessionStorage.setItem('name',text);
    setTimeout(function() {
      alert(welcome +" "+text+"!");
  }, 4000);
  }
  
  // Fakes the loading setting a timeout
  setTimeout(function(){$('body').addClass('loaded');},2000);  
     
    
});
function exitFunction(){
  var t=confirm("Do you really want to exit?");
  if(t==true)
  {
    alert("Have a nice day!");
  }
  else{
    var link=document.getElementById("exitbtn");
    link.setAttribute("href","index.html");
    alert("Welcome back!");
  }
}