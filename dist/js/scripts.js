// Обработка и отправка формы через Ajax
$('#offer-form', '#brif-form', '#modal').on('submit' , function(event) {
  event.preventDefault();
  $.ajax({
    url: 'mail.php',
    type: 'POST',
    data: $(this).serialize(),
    success: function(data) {
      $('.success').text(data + ', Ваша форма отправлена');
    }
  })
});
// Инициализация WOW.js
new WOW().init();
// Слайдер
$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.arrows__left'),
    nextArrow: $('.arrows__right'),
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

 // Валидация формы
      $('#brif-form').validate({
        rules: {
          username:{
            required: true,
            minlenght: 2,
            maxlength: 15
          },
          phone: {
            required: true
          },
          email:{
            required: true,
            email: true
          }
        },
        messages: {
          username: "Заполните поле",
          email: "Заполните поле",
          phone: "Заполните поле"
        }
      });
      $('#offer-form').validate({
        rules: {
          username: "required",
          phone: {
            required: true
          },
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          username: "Заполните поле",
          email: "Заполните поле",
          phone: "Заполните поле"
        }
      });
      $('#form').validate({
        rules: {
          username: {
            required: true,
            minlenght: 2,
            maxlength: 15
          },
          phone: {
            required: true
          },
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          username: "Заполните поле",
          email: "Заполните поле",
          phone: "Заполните поле"
        }
      });
      // Маска для телефона
      $('.phone').mask('8 (999) 999-99-99');
