steal( "./experience.js", 
	   "funcunit/qunit", 
	   "resume/models/fixtures", 
	   function( Experience ){
	   	
	module("resume/models/experience");
	
	test("findAll", function(){
		expect(4);
		stop();
		Experience.findAll({}, function(experiences){
			ok(experiences, "findAll provides an object")
	        ok(experiences.length, "findAll provides something array-like")
	        ok(experiences[0].name, "findAll provides an object with a name")
	        ok(experiences[0].description, "findAll provides an object with a description")
			start();
		});
	});
	
	test("create", function(){
		expect(3)
		stop();
		new Experience({name: "dry cleaning", description: "take to street corner"}).save(function(experience) {
			ok(experience, "save provides an object");
			ok(experience.id, "save provides and object with an id");
			equals(experience.name,"dry cleaning", "save provides an objec with a name")
			experience.destroy()
			start();
		});
	});

	test("update" , function(){
		expect(2);
		stop();
		new Experience({name: "cook dinner", description: "chicken"}).save(function(experience) {
			equals(experience.description,"chicken", "save creates with description");
			experience.attr({description: "steak"}).save(function(experience){
				equals(experience.description,"steak", "save udpates with description");
				experience.destroy();
				start();
			});
        });
	});

	test("destroy", function(){
		expect(1);
		stop();
		new Experience({name: "mow grass", description: "use riding mower"}).destroy(function(experience) {
			ok( true ,"Destroy called" )
			start();
		});
	});
});