$(document).ready(function() {
     var x=0;
     var images=["image/img1.jpg","image/img2.jpg","image/img3.jpg","image/img4.jpg"];
      $(".bir").click(function(){
          x=$(this).text();
          console.log(x)
          $('.img1 img').attr("src", images[x-1]);
          $(".test").eq(x-1).css('z-index','10').animate({left: '0'}, "4000");
}); 
});