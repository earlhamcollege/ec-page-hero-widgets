module.exports = {        
  extend: 'apostrophe-widgets',        
  label: 'EC Page Hero',
  contextual: false,        
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
			},
			{
				name: 'config',
				label: 'Configuration',
				type: 'object',
				schema: [
					{
				      name: 'heroHeight',
				      label: 'Hero Height',
						type: 'range',
						min: 200,
  						max: 500,
  						step: 100,
  						def: 400
				    },
				    {
				      name: 'speed',
				      label: 'Carousel Speed',
						type: 'range',
						min: 100,
  						max: 1000,
  						step: 100,
  						def: 300,
  						help: 'This setting may get overwritten by a global setting'
				    },
				    {
				      name: 'dots',
				      label: 'Display Dots',
						type: 'boolean',
  						def: false,
  						help: 'This setting may get overwritten by a global setting'
				    }
				  ]
			}
    	].concat(options.addFields || [])
    	options.arrangeFields = [
			 {
		      name:'Configuration',
		      label:'Configuration',
		      fields: ['config']
		    },
    	].concat(options.arrangeFields || [])
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