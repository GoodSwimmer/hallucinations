var header = $("#fixedContent");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
       if (scroll >= window.innerHeight) {
          header.addClass("fixed");
        } else {
          header.removeClass("fixed");
        }
});

$(window).scroll(function(){
    $(".top").css("opacity", 1 - $(window).scrollTop() / 250);
  });

/*win.scroll(function(){
  scrollPosition = win.scrollTop();
  scrollRatio = 1 - scrollPosition / 300;
  $(".top").css("opacity", scrollRatio);
*/
