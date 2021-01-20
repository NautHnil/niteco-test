"use strict";

var PageInits = {
  getDebounce: function getDebounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
          args = arguments;

      var later = function later() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  },
  nitecoSwiper: function nitecoSwiper() {
    var self = this;
    var swiper = new Swiper('[data-swiper="init"]', {
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
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
    swiper.on('init', function () {});
    swiper.on('slideChange', function () {});
    swiper.init();
  },
  compareHeightObj: function compareHeightObj() {
    $('[data-compare="init"]').each(function () {
      var $el = $(this);
      var objCompare = $el.data("compare-element");
      var _h = 0;

      if (window.innerWidth >= 992) {
        $(objCompare).each(function () {
          $(this).removeAttr('style');
          if (_h < $(this).innerHeight()) _h = $(this).innerHeight();
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
  init: function init() {
    var self = this;
    var resizeDebounce = self.getDebounce(function () {
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
    var resizeDebounce = PageInits.getDebounce(function () {// Code...
    }, 250);
    window.addEventListener("resize", resizeDebounce);
  });
})(jQuery);
//# sourceMappingURL=maps/all.bundle.js.map
