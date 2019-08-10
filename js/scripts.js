// Обработка и отправка формы через Ajax
$('#offer-form').on('submit' , function(event) {
  event.preventDefault();
  $.Ajax({
    url: 'mail.php',
    type: 'POST',
    data: $(this).serialize(),
    success: function(data) {
      $('.success').text(data + ', Ваша форма отправлена');
    }
  })
})