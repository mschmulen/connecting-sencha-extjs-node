Ext.define('mySenchaApp.controller.ProductController', {
    extend: 'Ext.app.Controller',
		
    views:[
        'products.List',
        'products.Add'
    ],
		
    stores:[ 'ProductStore' ],
		
    refs: [
        {
            ref: 'ProductsList',
            selector: 'productsList'
        },
        {
            ref: 'ProductsAdd',
            selector: 'productsAdd'
        }
    ],
		
    init: function () {
        var me = this;
				
        this.control({
            'productsList > toolbar > button#add': {
                click: me.onProductsAddClick
            },
            'productsList':{
                removeRow: me.removeRow
            },
            'productsAdd > form > button#save': {
                click: me.onProductsAddSaveClick
            },
            'productsAdd > form > button#cancel': {
                click: me.onProductsAddCancelClick
            }
        });
    },
    removeRow: function(grid, rowIndex, colIndex){
        //ask user about removing
        Ext.Msg.confirm('Confirm', 'Remove?', function(button) {
            if (button === 'yes') {
                grid.getStore().removeAt(rowIndex);
            }
        });
    },
    onProductsAddCancelClick: function(button, e, eOpts) {
        this.getUsersAdd().destroy();
    },
    onProductsAddSaveClick: function(){
        var me = this, form = me.getProductsAdd().down('form').getForm(), rec;
				
        if(form.isValid())
        {
            form.updateRecord();
            rec = form.getRecord();
            me.getProductsList().getStore().add(rec);
						
            me.getProductsAdd().destroy();
        }
    },
    onProductsAddClick: function(){
        var me = this, window = Ext.widget('productsAdd');

        window.show();
        window.down('form').getForm().loadRecord(new mySenchApp.model.ProductModel());
    }
		
});
