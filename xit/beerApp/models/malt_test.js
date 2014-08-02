steal( "./malt.js", 
	   "funcunit/qunit", 
	   "xit/models/fixtures", 
	   function( Malt ){
	   	
	module("xit/models/malt");
	
	test("findAll", function(){
		expect(4);
		stop();
		Malt.findAll({}, function(malts){
			ok(malts, "findAll provides an object")
	        ok(malts.length, "findAll provides something array-like")
	        ok(malts[0].name, "findAll provides an object with a name")
	        ok(malts[0].description, "findAll provides an object with a description")
			start();
		});
	});
	
	test("create", function(){
		expect(3)
		stop();
		new Malt({name: "dry cleaning", description: "take to street corner"}).save(function(malt) {
			ok(malt, "save provides an object");
			ok(malt.id, "save provides and object with an id");
			equals(malt.name,"dry cleaning", "save provides an objec with a name")
			malt.destroy()
			start();
		});
	});

	test("update" , function(){
		expect(2);
		stop();
		new Malt({name: "cook dinner", description: "chicken"}).save(function(malt) {
			equals(malt.description,"chicken", "save creates with description");
			malt.attr({description: "steak"}).save(function(malt){
				equals(malt.description,"steak", "save udpates with description");
				malt.destroy();
				start();
			});
        });
	});

	test("destroy", function(){
		expect(1);
		stop();
		new Malt({name: "mow grass", description: "use riding mower"}).destroy(function(malt) {
			ok( true ,"Destroy called" )
			start();
		});
	});
});