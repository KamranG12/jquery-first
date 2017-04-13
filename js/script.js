$(document).ready(function() {
     var x=0;
      $(".bir").click(function(){
          x=$(this).text();
          leftvalue = $(".test").eq(x-1).css('left');
          console.log(leftvalue)
          if(leftvalue=='1500px'){
          $(".test").eq(x-1).css('z-index','10').animate({left: '0'}, "35000");
          $(".test").eq(x-1).prevAll().css('z-index','10').animate({left: '0'}, "35000");
          }else if(x!=1){
           $(".test").eq(x).css('z-index','10').animate({left: '1500'}, "35000");
           $(".test").eq(x).nextAll().css('z-index','10').animate({left: '1500'}, "35000");
          }else{
              $(".test").eq(x-1).nextAll().css('z-index','10').animate({left: '1500'}, "35000");
          }
}); 
});