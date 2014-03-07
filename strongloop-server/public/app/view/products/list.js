Ext.define("mySenchaApp.view.products.List", {
    extend: 'Ext.grid.Panel',
    xtype: 'products-List',
    title: 'products',

    viewConfig: {
        enableTextSelection: true,
        stripeRows: true
    },

    store: 'ProductStore',

    initComponent: function () {

      var me = this,
          rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
          clicksToEdit: 2
      }),
          rowMenu = Ext.create('Ext.menu.Menu', {
          height: 58,
          width: 140,
          items: [{
              text: 'Edit',
              iconCls: 'button-edit'
          }, {
              text: 'Remove',
              iconCls: 'button-remove',
              handler: function(){
                  me.fireEvent('removeRow', this);
              }
          }]
      });

      this.listeners = {
          itemcontextmenu: function(view, record, item, index, e){
              e.stopEvent();
              rowMenu.showAt(e.getXY());
          }
      };

      this.plugins = [rowEditing];

      this.selType = 'rowmodel';

      this.dockedItems = [
          {
              xtype: 'toolbar',
              dock: 'top',
              items: [
                  {
                      xtype: 'button',
                      itemId: 'add',
                      text: 'Add product'
                  },
                  {
                      xtype: 'container',
                      flex: 1
                  }
              ]
          },
          {
              xtype: 'pagingtoolbar',
              dock: 'bottom',
              width: 360,
              displayInfo: true,
              store: 'ProductStore'
          }
      ];//end rows

      this.columns = [
          { text: 'id', dataIndex: 'id', hidden: false },
          {
              text: 'Name',
              dataIndex: 'name',
              editor: {
                  allowBlank: false
              }
          },
          {
              text: 'Description',
              dataIndex: 'description',
              flex: .5,
              editor: {
                  allowBlank: false
              }
          },
          {
              text: 'Inventory',
              dataIndex: 'inventory',
              flex: .5,
              editor: {
                  allowBlank: false
              }
          },
          {
              text: 'Price',
              dataIndex: 'price',
              flex: .5,
              editor: {
                  allowBlank: false
              }
          },
          {
              xtype: 'actioncolumn',
              width: 50,
              items: [
                  {
                      iconCls: 'button-edit',
                      tooltip: 'Edit',
                      handler: function (grid, rowIndex, colIndex) {
                          this.up('grid').fireEvent('editRow', grid, rowIndex, colIndex);
                      }
                  },
                  {
                      iconCls: 'button-remove',
                      tooltip: 'Remove',
                      handler: function (grid, rowIndex, colIndex) {
                          this.up('grid').fireEvent('removeRow', grid, rowIndex, colIndex);
                      }
                  }
              ]
          }
      ];//end columns

      //parent
      this.callParent(arguments);

  	}
});