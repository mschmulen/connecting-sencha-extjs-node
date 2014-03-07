Ext.define('mySenchaApp.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
				'Ext.grid.plugin.RowEditing',
				'Ext.grid.column.Action',
				'Ext.toolbar.Paging'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [{
        region: 'west',
        xtype: 'panel',
        title: 'west',
        width: 150
    },{
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            xtype: 'products-List'
        }]
    }]
});