(function($) {
    $(function() {
      $(".tablist").on("click", ".tabitem:not(.active)", function() {
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

  $(document).ready(function(){
    $(".regist-btn").click(function(){
      $(".sec1").fadeOut(700, function(){
        $(".sec2").fadeIn(700);
      } );
      });
  });