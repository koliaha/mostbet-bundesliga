(function ($) {
  $(function () {
    $(".tablist").on("click", ".tabitem:not(.active)", function () {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest(".form-wrap")
        .find(".tab-content")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });
})(jQuery);

$(document).ready( ()=> {
  $(".regist-btn").click( ()=> {
    $(".sec1").fadeOut(700,  ()=> {
      $(".sec2").fadeIn(700);
    });
  });
  $("a.popup-privacy").click( (event)=> {
    event.preventDefault();
    $(".darkscreen").fadeIn(700,  ()=> {
      $(".close").click(  ()=> {
        $(".darkscreen").fadeOut(700)
      });
    });
  });
  $(".darkscreen").on('click', (e)=> {
    var el = '.sec_policy';
    if ($(e.target).closest(el).length) return;
     {$(".darkscreen").fadeOut(700);}
    
   });
});