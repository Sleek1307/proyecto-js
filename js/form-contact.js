$(document).ready(() => {
    let theme = $("#style");
  
    $("#to-green").click(function (e) {
      theme.attr("href", "css/green.css");
      $(".bxslider").bxSlider({
        startSlide: 0,
      });
    });
  
    $("#to-red").click(function (e) {
      theme.attr("href", "css/red.css");
      $(".bxslider").bxSlider({
        startSlide: 1,
      });
    });
  
    $("#to-blue").click(function (e) {
      theme.attr("href", "css/blue.css");
      $(".bxslider").bxSlider({
        startSlide: 2,
      });
    });
  
    $(window).scroll(() => {
      if ($(this).scrollTop() > 300) {
        $("#scroll-top").fadeIn("slow");
      } else {
        $("#scroll-top").fadeOut("slow");
      }
    });
  
    $("#scroll-top").click(() => {
      $("html, body").animate({ scrollTop: 0 }, 600);
    });
  
    $("#form-control").submit((e) => {
      e.preventDefault();
      let form_name = $("#form-name").val();
      if (form_name != null && form_name != "undefined") {
        $("#login").hide();
        localStorage.setItem("user", form_name);
        $("#p").after(`
        <br/>
        <div id='welcome'>
          <p>
          Bienvenido <span>${localStorage.user}</span>
          </p>
          <a href='#' id='logout'>
            LogOut
          </a>
        </div>`);
        $("#logout").click(() => {
          localStorage.removeItem("user");
          location.reload();
        });
      }
    });
    
    $('form input[name=date]').datepicker({
        dateFormat:'dd-mm-yy',
    })  

    $.validate({
        lang: 'es', 
    }); 
  });
  