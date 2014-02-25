Ext.define("mySenchaApp.view.products.Add", {
    extend: 'Ext.Component',
    alias: 'widget.productAdd',
		
    height: 225,
    width: 369,
    resizable: false,
    title: 'Add product',
    modal: true,
		
    initComponent: function() {
        var me = this;
				
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    bodyPadding: 20,
                    title: '',
                    defaults: { // defaults are applied to items, not the container
                        allowBlank: false,
                        allowOnlyWhitespace: false,
                        msgTarget: 'side',
                        xtype: 'textfield',
                        anchor: '100%'
                    },
                    items: [
                        {
                            fieldLabel: 'Name',
                            name: 'name',
                            minLength: 4
                        },
                        {
                            fieldLabel: 'Description',
                            name: 'description'
                        },
                        {
                            xtype: 'button',
                            anchor: 0,
                            itemId: 'save',
                            text: 'Save'
                        },
                        {
                            xtype: 'button',
                            anchor: 0,
                            itemId: 'cancel',
                            text: 'Cancel'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

    //html: 'Hello, World!!'
});