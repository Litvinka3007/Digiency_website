$('.tabs__items a').on('click', function(){
  $('.tabs__items .active').removeClass('active');
  $(this).addClass('active');
});