steal( "./gravity.js", 
	   "funcunit/qunit", 
	   "xit/models/fixtures", 
	   function( Gravity ){
	   	
	module("xit/models/gravity");
	
	test("findAll", function(){
		expect(4);
		stop();
		Gravity.findAll({}, function(gravities){
			ok(gravities, "findAll provides an object")
	        ok(gravities.length, "findAll provides something array-like")
	        ok(gravities[0].name, "findAll provides an object with a name")
	        ok(gravities[0].description, "findAll provides an object with a description")
			start();
		});
	});
	
	test("create", function(){
		expect(3)
		stop();
		new Gravity({name: "dry cleaning", description: "take to street corner"}).save(function(gravity) {
			ok(gravity, "save provides an object");
			ok(gravity.id, "save provides and object with an id");
			equals(gravity.name,"dry cleaning", "save provides an objec with a name")
			gravity.destroy()
			start();
		});
	});

	test("update" , function(){
		expect(2);
		stop();
		new Gravity({name: "cook dinner", description: "chicken"}).save(function(gravity) {
			equals(gravity.description,"chicken", "save creates with description");
			gravity.attr({description: "steak"}).save(function(gravity){
				equals(gravity.description,"steak", "save udpates with description");
				gravity.destroy();
				start();
			});
        });
	});

	test("destroy", function(){
		expect(1);
		stop();
		new Gravity({name: "mow grass", description: "use riding mower"}).destroy(function(gravity) {
			ok( true ,"Destroy called" )
			start();
		});
	});
});