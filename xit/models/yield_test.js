steal( "./yield.js", 
	   "funcunit/qunit", 
	   "xit/models/fixtures", 
	   function( Yield ){
	   	
	module("xit/models/yield");
	
	test("findAll", function(){
		expect(4);
		stop();
		Yield.findAll({}, function(yields){
			ok(yields, "findAll provides an object")
	        ok(yields.length, "findAll provides something array-like")
	        ok(yields[0].name, "findAll provides an object with a name")
	        ok(yields[0].description, "findAll provides an object with a description")
			start();
		});
	});
	
	test("create", function(){
		expect(3)
		stop();
		new Yield({name: "dry cleaning", description: "take to street corner"}).save(function(yield) {
			ok(yield, "save provides an object");
			ok(yield.id, "save provides and object with an id");
			equals(yield.name,"dry cleaning", "save provides an objec with a name")
			yield.destroy()
			start();
		});
	});

	test("update" , function(){
		expect(2);
		stop();
		new Yield({name: "cook dinner", description: "chicken"}).save(function(yield) {
			equals(yield.description,"chicken", "save creates with description");
			yield.attr({description: "steak"}).save(function(yield){
				equals(yield.description,"steak", "save udpates with description");
				yield.destroy();
				start();
			});
        });
	});

	test("destroy", function(){
		expect(1);
		stop();
		new Yield({name: "mow grass", description: "use riding mower"}).destroy(function(yield) {
			ok( true ,"Destroy called" )
			start();
		});
	});
});