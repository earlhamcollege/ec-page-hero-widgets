apos.define('ec-page-hero-widgets', {
  extend: 'apostrophe-widgets',
  beforeConstruct: function(self, options){
     self.play = function($widget, data, options) {
      var instance = data._id;

      // Get configuration from configuations passed to ec-gallery

      $widget.find("[data-ec-page-hero-"+instance+"]").css('max-height',data.config.heroHeight+ 'px');

      $widget.find("[data-ec-page-hero-"+instance+"]").slick({
        infinite: true,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
      });
      return false;
    };
  },
  construct: function(self, options) {
  }
});