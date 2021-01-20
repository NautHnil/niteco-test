const PageInits = {
  getDebounce: function (func, wait, immediate) {
    let timeout;
    return function () {
      let context = this,
        args = arguments;
      let later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  },

  nitecoSwiper: function () {
    const self = this;
    const swiper = new Swiper('[data-swiper="init"]', {
      init: false,
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    swiper.on('init', function () {

    });
    swiper.on('slideChange', function () {});
    swiper.init();
  },

  compareHeightObj: function () {
    $('[data-compare="init"]').each(function () {
      const $el = $(this);
      const objCompare = $el.data("compare-element");
      let _h = 0;

      if (window.innerWidth >= 992) {
        $(objCompare).each(function () {
          $(this).removeAttr('style');
          if (_h < $(this).innerHeight())
            _h = $(this).innerHeight();
        });

        $(objCompare).css({
          height: _h
        });
      } else {
        $(objCompare).each(function () {
          $(this).removeAttr('style');
        });
      }
    });
  },

  init: function () {
    let self = this;
    let resizeDebounce = self.getDebounce(function () {
      self.nitecoSwiper();
      self.compareHeightObj();
    }, 250);

    self.nitecoSwiper();
    self.compareHeightObj();

    window.addEventListener("resize", resizeDebounce);
  }
};

(function ($) {
  "use strict";
  $(document).ready(function () {
    PageInits.init();
  });

  $(window).on("load", function () {

    let resizeDebounce = PageInits.getDebounce(function() {
      // Code...
    }, 250);

    window.addEventListener("resize", resizeDebounce);
  });
})(jQuery);
