var loopback = require('loopback');
var app = require('../app');

var productInstances = [
{"name":"productA", "inventory":33, price:"22.33" },
{"name":"productB", "inventory":22, price:"12.11" },
{"name":"productC", "inventory":11, price:"5.33" },
{"name":"productD", "inventory":44, price:"92.31" }
];

for( var i = 0 ; i <productInstances.length ; i ++ ) 
{
		var productModel = app.models.product;
		productModel.create( productInstances[i]);
}//end for
