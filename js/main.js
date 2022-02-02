$(document).ready(() => {
  $(".bxslider").bxSlider({
    mode: "horizontal",
    captions: true,
    slideWidth: 1200,
    pagerType: "short",
  });

  let posts = [
    {
      title: "Titulo 1",
      date: `Publicado en: ${moment().format("lll")}`,
      content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Recusandae corrupti soluta ad, perspiciatis repudiandae numquam
        debitis aperiam et ut quod, maiores in magnam tenetur. Nostrum
        possimus odit voluptates exercitationem qui!`,
    },
    {
      title: "Titulo 2",
      date: `Publicado en: ${moment().format("lll")}`,
      content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Recusandae corrupti soluta ad, perspiciatis repudiandae numquam
        debitis aperiam et ut quod, maiores in magnam tenetur. Nostrum
        possimus odit voluptates exercitationem qui!`,
    },
    {
      title: "Titulo 3",
      date: `Publicado en: ${moment().format("lll")}`,
      content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Recusandae corrupti soluta ad, perspiciatis repudiandae numquam
        debitis aperiam et ut quod, maiores in magnam tenetur. Nostrum
        possimus odit voluptates exercitationem qui!`,
    },
    {
      title: "Titulo 4",
      date: `Publicado en: ${moment().format("lll")}`,
      content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Recusandae corrupti soluta ad, perspiciatis repudiandae numquam
        debitis aperiam et ut quod, maiores in magnam tenetur. Nostrum
        possimus odit voluptates exercitationem qui!`,
    },
  ];

  posts.map((e) => {
    $("#posts").append(
      `<article class="post">
        <h2>${e.title}</h2>
        <span class="date">${e.date}</span>
        <p>
        ${e.content}
        </p>
    </article>
    <a class="button-more" href="">
      Leer mas
    </a>`
    );
  });

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

});
