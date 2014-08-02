steal( "./hop.js", 
	   "funcunit/qunit", 
	   "xit/models/fixtures", 
	   function( Hop ){
	   	
	module("xit/models/hop");
	
	test("findAll", function(){
		expect(4);
		stop();
		Hop.findAll({}, function(hops){
			ok(hops, "findAll provides an object")
	        ok(hops.length, "findAll provides something array-like")
	        ok(hops[0].name, "findAll provides an object with a name")
	        ok(hops[0].description, "findAll provides an object with a description")
			start();
		});
	});
	
	test("create", function(){
		expect(3)
		stop();
		new Hop({name: "dry cleaning", description: "take to street corner"}).save(function(hop) {
			ok(hop, "save provides an object");
			ok(hop.id, "save provides and object with an id");
			equals(hop.name,"dry cleaning", "save provides an objec with a name")
			hop.destroy()
			start();
		});
	});

	test("update" , function(){
		expect(2);
		stop();
		new Hop({name: "cook dinner", description: "chicken"}).save(function(hop) {
			equals(hop.description,"chicken", "save creates with description");
			hop.attr({description: "steak"}).save(function(hop){
				equals(hop.description,"steak", "save udpates with description");
				hop.destroy();
				start();
			});
        });
	});

	test("destroy", function(){
		expect(1);
		stop();
		new Hop({name: "mow grass", description: "use riding mower"}).destroy(function(hop) {
			ok( true ,"Destroy called" )
			start();
		});
	});
});