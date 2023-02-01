const swiper = new Swiper('.swiper', {
    spaceBetween: 20,
    slidesPerView: 2.1,

    pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    },

    freeMode: {
        enabled: true,
        sticky: true,
      },

    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    
  });

  const mqLarge  = window.matchMedia( '(min-width: 1024px)' );
  if(mqLarge.matches == true ) {
    
    const swiper = new Swiper('.swiper', {
        spaceBetween: 40,
        slidesPerView: 3,
        Views: 4,
    });
  }