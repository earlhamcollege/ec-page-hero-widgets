apos.define('ec-page-hero-widgets', {
  extend: 'apostrophe-widgets',
  construct: function(self, options) {
    self.play = function($widget, data, options) {
      var instance = data._id;

      // Get configuration from ec-gallery

      var showdots = data.showDots || false;
      var fullWidth = data.fullWidth || false;

      // Get configuration from configuations passed to ec-gallery

      if (options.dots != null){
        showdots = options.dots;    
      }
      if (options.fullWidth != null){
        fullWidth = options.fullWidth;    
      }

      $widget.find("[data-ec-page-hero-"+data._id+"]").slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
      });
      return false;
    };
  }
});