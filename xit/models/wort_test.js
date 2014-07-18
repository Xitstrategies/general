steal( "./wort.js", 
	   "funcunit/qunit", 
	   "xit/models/fixtures", 
	   function( Wort ){
	   	
	module("xit/models/wort");
	
	test("findAll", function(){
		expect(4);
		stop();
		Wort.findAll({}, function(worts){
			ok(worts, "findAll provides an object")
	        ok(worts.length, "findAll provides something array-like")
	        ok(worts[0].name, "findAll provides an object with a name")
	        ok(worts[0].description, "findAll provides an object with a description")
			start();
		});
	});
	
	test("create", function(){
		expect(3)
		stop();
		new Wort({name: "dry cleaning", description: "take to street corner"}).save(function(wort) {
			ok(wort, "save provides an object");
			ok(wort.id, "save provides and object with an id");
			equals(wort.name,"dry cleaning", "save provides an objec with a name")
			wort.destroy()
			start();
		});
	});

	test("update" , function(){
		expect(2);
		stop();
		new Wort({name: "cook dinner", description: "chicken"}).save(function(wort) {
			equals(wort.description,"chicken", "save creates with description");
			wort.attr({description: "steak"}).save(function(wort){
				equals(wort.description,"steak", "save udpates with description");
				wort.destroy();
				start();
			});
        });
	});

	test("destroy", function(){
		expect(1);
		stop();
		new Wort({name: "mow grass", description: "use riding mower"}).destroy(function(wort) {
			ok( true ,"Destroy called" )
			start();
		});
	});
});