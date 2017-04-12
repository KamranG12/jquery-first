$(document).ready(function() {
     var x=0;
      $(".bir").click(function(){
          x=$(this).text();
          console.log(x)
    $(".ekran").eq(x).css('z-index','10').animate({left: '0'},1000);
    console.log($(".ekran"))
}); 
});