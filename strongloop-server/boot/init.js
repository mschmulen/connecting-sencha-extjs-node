var loopback = require('loopback');
var app = require('../app');

var productInstances = [
{"name":"productA", "description":"description A", "inventory":11, "price":"11.33" },
{"name":"productB", "description":"description B", "inventory":22, "price":"22.33" },
{"name":"productC", "description":"description C", "inventory":33, "price":"33.33" },
{"name":"productD", "description":"description D", "inventory":44, "price":"44.33" },
{"name":"productE", "description":"description E", "inventory":55, "price":"55.33" }
];

for( var i = 0 ; i <productInstances.length ; i ++ ) 
{
		var productModel = app.models.product;
		productModel.create( productInstances[i]);
}//end for
