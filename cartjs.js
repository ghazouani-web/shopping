alert('heloo');
function plus(event){
    y= event.target.nextElementSibling ;
    x = event.target.nextElementSibling.innerHTML++   ;
   return x  ;
     } 
     function moins(event){
       x= event.target.previousElementSibling.innerHTML ;
       if (x > 0) {
       x = event.target.previousElementSibling.innerHTML--  ;
      return x  ;
       }
       else {
         return 0;
       }
        }     
 function quantity(){  
      if (document.querySelectorAll(".up")){
     for (let i = 0  ; i< document.querySelectorAll(".up").length ; i= i+1  ){
     document.querySelectorAll(".up")[i].addEventListener( "click" ,plus ) ;
     } 
   }
      if (document.querySelectorAll(".down")){
       for (let i = 0  ; i< document.querySelectorAll(".down").length ; i= i+1  ){
         document.querySelectorAll(".down")[i].addEventListener( "click" ,moins ) ;
         }
     }
   }
 
 
