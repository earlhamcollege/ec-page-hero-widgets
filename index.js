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
				name: 'customTitle',
				label: 'Custom Title',
				type: 'string'
			},
			{
				name: 'backgroundSize',
				label: 'Background Image Display',
				type: 'select',
				choices: [

					{
						label: 'Cover',
						value: 'cover'
					},
					{
						label: 'Contain',
						value: 'contain'
					},
					{
						label: 'Percentage',
						value: 'percent',
						showFields: ['overlaySize']
					}
				]
			},
			{
				name: 'imageOverlay',
				label: 'Image Overlay',
				type: 'attachment',
				options: {
					minSize: [ 600, 300 ]
				}
			},
			{
		      name: 'overlaySize',
		      label: 'Overlay Image Size',
				type: 'range',
				min: 1,
					max: 100,
					step: 1,
					def: 100,
					help: 'This setting may get overwritten by a global setting'
		    },
			{
				name: 'selectMedia',
				type: 'select',
				label: 'Choose Image or Video',
				choices: [
					{
						label: 'Image',
						value: 'images',
						showFields: [
        					'heroImages','imageConfig'
      					]
					},
					{
						label: 'Video',
						value: 'video',
						showFields: [
        					'heroVideo'
      					]
					}

				],
				def: 'Images'
			},
			{
				name: 'selectOverlay',
				type: 'select',
				label: 'Choose Type of Overlay',
				choices: [
					{
						label: 'Page Title',
						value: 'page-title'
					},
					{
						label: 'Custom Title',
						value: 'custom-title',
						showFields: ['customTitle']
					},
					{
						label: 'Image Overlay',
						value: 'image-overlay',
						showFields: ['imageOverlay','backgroundSize']
					}
				],
				def: 'page-title'
			},
			{
				name: 'imageConfig',
				label: 'Configuration',
				type: 'object',
				schema: [
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
				    }
				  ]
			},
			{
				name: 'fontType',
				label: 'Font Style',
				type: 'select',
				choices: [

					{
						label: '1',
						value: '1'
					},
					{
						label: '2',
						value: '2'
					},
					{
						label: '3',
						value: '3'
					}
				]
			},
			{
		      name: 'fontSize',
		      label: 'Overlay Font Size',
				type: 'range',
				min: 5,
					max: 50,
					step: 5,
					def: 12
			},
			{
		      name: 'textOpacity',
		      label: 'Text Opacity',
				type: 'range',
				min: 0.1,
				max: 1,
				step: 0.1,
				def: 0.5
			}
    	].concat(options.addFields || []),
    	options.arrangeFields = [
			 {
		      name:'configuration',
		      label:'Configuration',
		      fields: ['selectMedia','config', 'imageConfig']
		    },
		    {
		      name:'content',
		      label:'Content',
		      fields: ['heroImages','heroVideo']
		    },
		    {
		    	name: 'overlay',
		    	label: 'Overlay',
		    	fields: ['selectOverlay','customTitle','imageOverlay','backgroundSize','overlaySize', 'fontType', 'fontSize','textOpacity']
		    }
    	].concat(options.arrangeFields || [])
	},
	construct: function(self, options) {

		var superPushAssets = self.pushAssets;
		
		self.pushAssets = function() {
			superPushAssets();
			self.pushAsset('stylesheet', 'slick', 'always');
			self.pushAsset('stylesheet', 'slick-theme', 'always');
			self.pushAsset('stylesheet', 'always', 'always');
			self.pushAsset('stylesheet', 'custom', 'always');
			self.pushAsset('script', 'slick', 'always');
			self.pushAsset('script', 'always', 'always');
		}
	}
};