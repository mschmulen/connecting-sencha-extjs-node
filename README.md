Connecting Sencha xtjs with StrongLoop Node.js
---

<img src="images/hero.png" alt="tab Home" width="420">

##What

TODO fill in background on Secha XTJS

##Why

##How
- 

###Pre-Req's and Getting Started

- Install [Sencha-cmd](http://www.sencha.com/products/sencha-cmd/download)
- Install [Sencha-SDK](http://www.sencha.com/products/sencha-cmd/download)
- Install [Node](nodejs.org)
- Confirm node and npm : ``` node -v ``` and ```npm -v```
- Install Strong-cli ``` sudo npm install -g strong-cli ```
- Confirm slc Strong-cli install ```slc version```

You can run the sample by simply cloning to your local machine and running the node application.

```
git clone git@github.com:mschmulen/connecting-sencha-xtjs-node.git
cd connecting-sencha-xtjs-node.git
slc run app.js
```

slc is a simple command line helper for node applications you can install it on your system by installing it to your global npm cache `npm install -g strong-cli`.

###Initializing StrongLoop LoopBack and Sencha extjs

Using the slc command line and sencha cmd its very easy to scaffold a Node server with a Sencha extJS application.

1. Create your loopback node project with dlc ```slc lb project strongloop-server```
1. ```cd strongloop-server```
1. Configure strong-ops ```slc strongops --register```
1. Add a model to the project ```slc lb model product```
1. Create a public folder to host your Sencha extjs app ```mkdir public```
1. Configure routing in your node app to use the public folder for you applicants index.  In app.'s comment out the default root routing at line 121 ```//app.get('/', loopback.status());```
1. cd to the newly created public folder ```cd public```
1. scaffold your sencha app with the sencha cli ```sencha -sdk /Users/matt/acorns/extjs/ext-4.2.1.883 generate app mySenchApp ./```
1. build your sencha app ```sencha app build```
1. step back to your main project folder ```cd ../```
1. run your node server ```slc run app.js```.

Lets make sure we configured the scaffolding correctly by opening up a browser to [http://localhost:3000/](http://localhost:3000/) and you will see the default application running.

If you configured everything correctly you will see the default Sencha app boilerplate as shown below.

<img src="images/defaultSechaApp.png" alt="tab Home" width="420">


### Extend our sencha app and take advantate of LoopBacks model api 

Lets extend our Sencha Applicaion to do something interesting such as showing a dataGrid of our LoopBack model instances for a custom 'products' model type.  to do this we need to customize our sencha app.

### Create a Sencha App to show a datagrid view of our LoopBack 'products' data

1. Generate our Controller, Models and Views using the sencha command line tool

From within the ```~/strongloop-server/public``` folder run the following commands to scaffold the the senca app.

```
sencha generate controller ProductController
sencha generate model ProductModel name:string
sencha generate view products.list
sencha generate view products.add
mkdir store
touch ./store/ProductStore.js
sencha app build
```

####Customizing the Model, View and Controller to work with our Node API server.

Now that we have the sencha xtjs app scaffold in our Node.js application we can fill out the Model, Views and Control to complete the data grid editor of our Products Model.

Lets start with the model.

####Configuring the Secha Model and Stores

Configuring the Model to support our StrongLoop Node REST endpoints.

Open the `~/strongloop-server/public/model/ProductModel.js` file and replace the boiler plate code with

```
Ext.define('mySenchApp.model.ProductModel', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'id', type: 'int' }
    ]
});
```

with our specific field definitions, and our proxy and listener settings.

```
Ext.define('mySenchApp.model.ProductModel', {
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

```

We also need to fill out the Store object.  We created an empty ProductStore.js file because at this time Sencha Cmd does not have a 'sencha generate store' command.

Starting from an empty ProductStore.js file add the following configuration.

```
Ext.define('mySenchApp.store.ProductStore', {
    extend: 'Ext.data.Store',
    model: 'mySenchApp.model.ProductModel',
    autoLoad: true,
    autoSync: true,
    remoteFilter: true
});
```

####Configuring the Secha Views

Now that we have our Model and Store defined we can go to the Views.  For this data viewer and editor we will need 2 views: ```products.add``` and ```products.list``` .

the ```add.js``` file will show the listing of Product records and the ```add.js``` will give us a modal dialog to create new Product records.

model/ProductModel.js

Update the products/add.js file to [add.js](http://github.com/mschmulen/connecting-sencha-xtjs-node/blob/master/strongloop-server/public/app/view/products/add.js) and the list.js to [list.js](http://github.com/mschmulen/connecting-sencha-xtjs-node/blob/master/strongloop-server/public/app//view/products/list.js). once that is complete we need to make sure the controllers are updated to bind to the model data with the new views


####Configuring the Secha Controller

`/public/app/controller/ProductController.js` will facilitate the configuration of our View representations with our Model and Store components.

Overview of the controller: - 

The full ProductController.js file can be found [here](/strongloop-server/public/app/controller/ProductController.j)

 	




