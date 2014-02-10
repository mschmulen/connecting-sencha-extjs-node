Ext.define('mySenchaApp.store.ProductStore', {
    extend: 'Ext.data.Store',
    model: 'mySenchaApp.model.ProductModel',
    autoLoad: true,
    autoSync: true,
    remoteFilter: true
});