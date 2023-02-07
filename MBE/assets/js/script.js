const hamburgerMenu = document.querySelector(".hamburger-menu");
const navigation = document.querySelector(".navigation");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navigation.classList.toggle("active");
});

// const header = document.querySelector(".header-bg"); // Здесь класс вашей шапки
// window.addEventListener("scroll", function () {
//   if (window.scrollY >= 20) {
//     header.classList.addClass("scroll"); // Добавить класс, который будет менять стили
//   } else {
//     header.classList.removeClass("header-bg"); // Убрать
//   }
// });

let selector = ".slider__item img";

$(selector).on("click", function () {
  $(selector).removeClass("active-slide-brand-img");
  $(this).addClass("active-slide-brand-img");
});

function scrollValue() {
  let navbar = document.querySelector(".header-bg");
  let scroll = window.scrollY;
  if (scroll < 60) {
    navbar.classList.remove("bg-color");
  } else {
    navbar.classList.add("bg-color");
  }
}

window.addEventListener("scroll", scrollValue);

$(document).ready(function () {
  $(".hamburger-menu").click(function () {
    $(".navigation").slideToggle(300);
  });

  $(".custom-carousel .item").click(function () {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });

  $(".brand").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    // asNavFor: ".slider-for",
    infinite: true,
    // centerMode: true,
    focusOnSelect: true,
    variableWidth: true,
    // centerPadding: "100px",
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      // {
      //   breakpoint: 991,
      //   settings: {
      //     centerPadding: "0px",
      //     slidesToShow: 3,
      //     slidesToScroll: 1,
      //     infinite: true,
      //     dots: false,
      //     autoplay: false,
      //   },
      // },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          autoplay: false,
          variableWidth: false,
        },
      },
    ],
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: true,
    asNavFor: ".brand",
  });

  $(".history").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-forHistory",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  });

  $(".slider-forHistory").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".history",
  });

  $(".objects").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".slider-forObjects",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  });

  $(".slider-forObjects").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".objects",
  });

  $("select").on("click", function () {
    $(this).parent(".select-box").toggleClass("open");
  });

  $(document).mouseup(function (e) {
    var container = $(".select-box");

    if (container.has(e.target).length === 0) {
      container.removeClass("open");
    }
  });

  $("select").on("change", function () {
    var selection = $(this).find("option:selected").text(),
      labelFor = $(this).attr("id"),
      label = $("[for='" + labelFor + "']");

    label.find(".label-desc").html(selection);
  });
});

const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
  animationTime = 800,
  framesCount = 100;

anchors.forEach(function (item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener("click", function (e) {
    // убираем стандартное поведение
    e.preventDefault();

    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    try {
      let coordY =
        document
          .querySelector(item.getAttribute("href"))
          .getBoundingClientRect().top +
        window.pageYOffset -
        250;

      let scroller = setInterval(function () {
        let scrollBy = coordY / framesCount;

        if (
          scrollBy > window.pageYOffset - coordY &&
          window.innerHeight + window.pageYOffset < document.body.offsetHeight
        ) {
          window.scrollBy(0, scrollBy);
        } else {
          window.scrollTo(0, coordY);
          clearInterval(scroller);
        }
      }, animationTime / framesCount);
    } catch (err) {
      window.scrollTo(0, 0);
    }
  });
});
