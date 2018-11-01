apos.define('ec-page-hero-widgets', {
  extend: 'apostrophe-widgets',
  beforeConstruct: function(self, options){
     self.play = function($widget, data, options) {
    }
  },
  construct: function(self, options) {
    self.play = function($widget, data, options) {
        // Loads the YouTube IFrame API JavaScript code.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
// Inserts YouTube JS code into the page.
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

// onYouTubeIframeAPIReady() is called when the IFrame API is ready to go.
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '360',
      width: '640',
      videoId: data.heroVideo.items[0].video.url.split("v=")[1],
      playerVars: { 'autohide': 1,'autoplay': 1, 'controls': 0, 'showinfo': 0, 'rel': 0, 'enablejsapi':1, 'wmode' : 'transparent','iv_load_policy':3,'rel': 0,'loop':1,'playlist': '{{videoId}}','iv_load_policy':3,'fs':0},
      events : {
        'onReady' : pkOnPlayerReady,
         'onStateChange' : pkOnPlayerStateChange
      }
    });
}

function pkOnPlayerReady(e) {
  player.mute();
  e.target.setPlaybackQuality('hd720');
  player.hideVideoInfo();

}

//Load a youtube pixel
var pkEnableYoutube = function() {
     var deferred = jQuery.Deferred();
     var img = new Image();
     img.onload = function() { return deferred.resolve(); };
     img.onerror = function() { return deferred.reject(); };
     img.src = "https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif?"+ new Date().getTime();
     return deferred.promise();
};

//When the video starts to load, set a timer for the video wrap to fade in
jQuery(function($){
  $.when(pkEnableYoutube()).done(function(){
    setTimeout(function() {
      $('.video_wrap').fadeIn();
    }, 2000);
  });
});
      var instance = data._id;

      // Get configuration from configuations passed to ec-gallery

      $widget.find("[data-ec-page-hero-"+instance+"]").css('max-height',data.config.heroHeight+ 'px');

      $widget.find("[data-ec-page-hero-"+instance+"]").slick({
        infinite: true,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        slide: "[data-ec-page-hero-"+instance+"] div.slide"
      });


    


      return false;
    };
  }
});