Ext.define('mySenchaApp.Application', {
    name: 'mySenchaApp',
		
    extend: 'Ext.app.Application',
		
		requires: [
		        'mySenchaApp.lib.form.field.VTypes',
		        'mySenchaApp.lib.form.field.override.Text'
		],
		
    views: [
    	'products.List',
    	'products.Add'
    ],

    controllers: [
      'ProductController'
		],
		
    stores: [
        // TODO: add stores here
    ],
		
    launch: function(){
        Ext.create('mySenchaApp.lib.form.field.VTypes').init();
    },
			
});
