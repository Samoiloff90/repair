// Обработка и отправка формы через Ajax
$('#offer-form').on('submit' , function(event) {
  event.preventDefault();
  $.ajax({
    url: 'mail.php',
    type: 'POST',
    data: $(this).serialize(),
    success: function(data) {
      $('.success').text(data + ', Ваша форма отправлена');
    }
  })
})