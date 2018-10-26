module.exports = {        
  extend: 'apostrophe-widgets',        
  label: 'EC Page Hero',        
  beforeConstruct: function(self, options) {
		options.addFields = [
			{
				name: 'heroImages',
				label: 'Hero Images',
				type: 'singleton',
				widgetType: 'apostrophe-images',
				options: {
					minSize: [ 600, 300 ],
					focalPoint: true
				}
			},
			{
				name: 'heroVideo',
				label: 'Hero Video',
				type: 'singleton',
				widgetType: 'apostrophe-video'
			}
    	].concat(options.addFields || [])
	},
	construct: function(self, options) {

		var superPushAssets = self.pushAssets;
		
		self.pushAssets = function() {
			superPushAssets();
			self.pushAsset('stylesheet', 'vendor/slick/slick', 'always');
			self.pushAsset('stylesheet', 'vendor/slick/slick-theme', 'always');
			self.pushAsset('stylesheet', 'always', 'always');
			self.pushAsset('stylesheet', 'custom', 'always');
			self.pushAsset('script', 'vendor/slick/slick', 'always');
			self.pushAsset('script', 'always', 'always');
		}
	}
};