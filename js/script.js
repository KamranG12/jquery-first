$(document).ready(function() {
     var x=0;
     var images=["image/img1.jpg","image/img2.jpg","image/img3.jpg","image/img4.jpg"];
      $(".bir").click(function(){
          x=$(this).text();
          leftvalue = $(".test").eq(x-1).css('left');
          console.log(leftvalue)
          if(leftvalue=='1500px'){
          $(".test").eq(x-1).css('z-index','10').animate({left: '0'}, "4000");
          $(".test").eq(x-1).prevAll().css('z-index','10').animate({left: '0'}, "4000");
          $('.img1 img').attr("src", images[x-1]);
          }else if(x!=1){
           $(".test").eq(x-1).css('z-index','10').animate({left: '1500'}, "4000");
           $(".test").eq(x-1).nextAll().css('z-index','10').animate({left: '1500'}, "4000");
           $('.img1 img').attr("src", images[x-2]);
          }else{
              $(".test").eq(x-1).nextAll().css('z-index','10').animate({left: '1500'}, "4000");
              $('.img1 img').attr("src", images[x-1]);
          }
}); 
});