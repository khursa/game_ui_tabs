;(function($) {

$(function() {

  $('ul.tabs__label').each(function() {

    $(this).find('li').each(function(i) {

      $(this).click(function(){

        $(this).addClass('active').siblings().removeClass('active')

          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq(i).addClass('active');
      
      });
   
    });
  
  });

})

})(jQuery)
