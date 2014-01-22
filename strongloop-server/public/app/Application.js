Ext.define('mySenchApp.Application', {
    name: 'mySenchApp',

    extend: 'Ext.app.Application',

    requires: [
        'mySenchApp.lib.form.field.VTypes',
        'mySenchApp.lib.form.field.override.Text'
    ],
		
    views: [
    	'products.list',
    	'products.add'
    ],
		
    controllers: [
      'ProductController'
		],
		
    stores: [
        // TODO: add stores here
    ],
		
    launch: function(){
        Ext.create('mySenchApp.lib.form.field.VTypes').init();
    },
		
});
