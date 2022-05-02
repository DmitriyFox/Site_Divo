$(".main_slider").slick(
        {
        // Infinite: true,
        arrows: false,
        // dots: true,
        // slidesToShow: 3,
        // slidesToScroll: 1
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear'
    }
);

// if (window.jQuery) {
//     var verJquery = jQuery.fn.jquery;
//     // выведем версию jQuery в консоль
//     console.log(verJquery);
// }

// if (window.jQuery) {
//     // jQuery подключен к странице
//   } else {
//     // jQuery не подключен к странице
//   }

// document.addEventListener('DOMContentLoaded', function () {
//     /* код на jQuery */
//     // установим body фон #eee
//     $('body').css('background-color', '#eee');
//     // выровняем h1 по центру
//     $('h1').css('text-align', 'center');
//     // добавим в конец страницы элемент div с контентом "Я люблю jQuery"
//     $('body').append('<div style="text-align: center; font-size: 20px;">Я люблю jQuery</div>');
//   });