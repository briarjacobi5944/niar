!function(e,n){"use strict";var t=function(e,n){var t=e.find(".bdt-review-card-carousel");if(!t.length)return;var r=t.find(".swiper-container"),o=t.data("settings");const i=elementorFrontend.utils.swiper;!async function(){await new i(r,o),o.pauseOnHover&&n(r).hover((function(){this.swiper.autoplay.stop()}),(function(){this.swiper.autoplay.start()}))}()};jQuery(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/bdt-review-card-carousel.default",t)}))}(jQuery,window.elementorFrontend);