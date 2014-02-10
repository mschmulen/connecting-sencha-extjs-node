Ext.define('mySenchaApp.model.ProductModel', {
    extend: 'Ext.data.Model',

    proxy: {
        type: 'rest',
        url : 'http://localhost:3000/api/products',
            headers: {
                'Accept': 'application/json'
            },
                callbackKey: 'callback',
                    callback: function( data ) {
                        console.log("callback" + data);
                },
        reader: {
            type: 'json'
        }
    },
    listeners: {
        write: function(store, operation){
            var record = operation.getRecords()[0],
                name = Ext.String.capitalize(operation.action),
                verb;
                        if (name == 'Destroy') {
                record = operation.records[0];
                verb = 'Destroyed';
            } else {
                verb = name + 'd';
            }
            Ext.example.msg(name, Ext.String.format("{0} user: {1}", verb, record.getId()));

        }
    },

    fields: [
        { name: 'id', type: 'int', defaultValue: null },
        { name: 'name', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'inventory', type: 'int' },
        { name: 'price', type: 'string' },
    ]
});