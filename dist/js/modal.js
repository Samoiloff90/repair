$(document).ready(function() {
  var button = $('#button');
  var modal = $('#modal');
  var close = $('#close');
  var cardlink = $('.card__link');

  button.on('click', function () {
    modal.addClass('modal_active');
  });

  cardlink.on('click', function (event) {
    event.preventDefault();
    modal.addClass('modal_active');
    var target = $(this).attr('data-target');
    console.log(target)
  });

  close.on('click', function () {
    modal.removeClass('modal_active');
  });
});