

  function scrollToAnchor(selector){
      const destination = $(selector);
      $('html,body').animate({
          scrollTop: destination.offset().top
      },'slow');
  }


  $('button[class*="__button-order"]').click(() => {
    scrollToAnchor('.order');
  })
