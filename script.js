var text;
$(document).ready(function() {
  text=prompt("welcome to coding world, enter your name:","User");
  // Fakes the loading setting a timeout
    setTimeout(function() {
        $('body').addClass('loaded');
        alert("hello"+ text );
    }, 1500);   
});
setTimeout(function(){
  
},15000);
