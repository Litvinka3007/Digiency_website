$(document).ready(function() {
  $('.tabs__item').click(function(e){
    e.preventDefault();

    $('.tabs__item').removeClass('tabs__item-active');
    $('.tabs__block').removeClass('tabs__block-active');

    $(this).addClass('tabs__item-active');
    $($(this).attr('href')).addClass('tabs__block-active');
  });

  $('.tabs__item:first').click();
});