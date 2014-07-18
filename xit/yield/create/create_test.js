steal('funcunit', 
	'./create.js',
	'xit/models/yield.js',
	'xit/models/fixtures', 
	function (S, YieldCreate, Yield, yieldStore ) {

	module("xit/yield/create", {
		setup: function(){
			$("#qunit-test-area").append("<form id='create'></form>");
			new YieldCreate("#create");
		},
		teardown: function(){
			$("#qunit-test-area").empty();
			yieldStore.reset();
		}
	});
	
	test("create yields", function () {
		stop();
		
		Yield.bind("created",function(ev, yield){
			ok(true, "Ice Water added");
			equals(yield.name, "Ice Water", "name set correctly");
			equals(yield.description, 
				"Pour water in a glass. Add ice cubes.", 
				"description set correctly");
			start();
			Yield.unbind("created",arguments.callee);
		})
		
		S("[name=name]").type("Ice Water");
		S("[name=description]").type("Pour water in a glass. Add ice cubes.");
		
		S("[type=submit]").click();
		
		S("[type=submit]").val("Creating...","button text changed while created");
		S("[type=submit]").val("Create", function(){
			ok(true, "button text changed back after create");
			equals(S("[name=name]").val(), "", "form reset");
			equals(S("[name=description]").val(), "", "form reset");
		});
	});

});