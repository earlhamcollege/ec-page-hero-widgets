apos.define('ec-page-hero-widgets', {
  extend: 'apostrophe-widgets',
  beforeConstruct: function(self, options){
  },
  construct: function(self, options) {
    self.play = function($widget, data, options) {

var vid =  $widget.find("[data-ec-page-hero-"+data._id+"]").data('videoid'), // "iGpuQ0ioPrM",
    streams,
    video_focused = true,
    video_tag = $("#video"),
    video_obj = video_tag.get(0);
$.get("https://images"+~~(Math.random()*33)+"-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=https%3A%2F%2Fwww.youtube.com%2Fget_video_info%3Fvideo_id%3D" + vid, function(data) {
console.log(data);
    if (data) {
        streams = parse_youtube_meta(data);
        video_tag.attr({
            src: streams['1080p'] || streams['720p'] || streams['360p']
        });

        document.addEventListener("visibilitychange", function() {
            video_focused = !video_focused ? video_obj.play() : video_obj.pause();
        });
    } else {
        $('pre').text('Youtube API Error');
    }
});

function parse_youtube_meta(rawdata) {
    var data = parse_str(rawdata),
        streams = (data.url_encoded_fmt_stream_map + ',' + data.adaptive_fmts).split(','),
        result = {};
    streams.forEach(function(s) {
        var stream = parse_str(s),
            itag = stream.itag * 1,
            quality = false,
            itag_map = {
                18: '360p',
                22: '720p',
                37: '1080p',
                38: '3072p',
                82: '360p3d',
                83: '480p3d',
                84: '720p3d',
                85: '1080p3d',
                133: '240pna',
                134: '360pna',
                135: '480pna',
                136: '720pna',
                137: '1080pna',
                264: '1440pna',
                298: '720p60',
                299: '1080p60na',
                160: '144pna',
                139: "48kbps",
                140: "128kbps",
                141: "256kbps"
            };
        //if (stream.type.indexOf('o/mp4') > 0) console.log(stream);
        if (itag_map[itag]) result[itag_map[itag]] = stream.url;
    });
    return result;
};

function parse_str(str) {
    return str.split('&').reduce(function(params, param) {
        var paramSplit = param.split('=').map(function(value) {
            return decodeURIComponent(value.replace('+', ' '));
        });
        params[paramSplit[0]] = paramSplit[1];
        return params;
    }, {});
}



       
        var instance = data._id;
        var videoEl = $widget.find("[data-ec-page-hero-"+instance+"] #video");

        // Get configuration from configuations passed to ec-gallery

        $widget.find("[data-ec-page-hero-"+instance+"]").css('max-height',data.config.heroHeight+ 'px');

        $widget.find("[data-ec-page-hero-"+instance+"]").slick({
          infinite: true,
          fade: true,
          cssEase: 'linear',
          autoplay: true,
          slide: "[data-ec-page-hero-"+instance+"] div.slide"
        });
       $widget.find('[data-ec-page-hero] [data-loading]').fadeIn().attr('data-loading', 'data-loaded');
                $widget.find('[data-ec-page-hero] h1').css('font-size', data.fontSize+'vw');
                
                 $widget.find('[data-ec-page-hero] h1').css('opacity', data.textOpacity);

                if(videoEl.data('bottom')==0){
                  videoEl.css('top',videoEl.data('top')+'px');
                }
                if(videoEl.data('top')==0){
                  videoEl.css('bottom',videoEl.data('bottom')+'px');
                }
                
    };
   }
});