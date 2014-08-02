steal('funcunit', 
	'./create.js',
	'xit/models/gravity.js',
	'xit/models/fixtures', 
	function (S, GravityCreate, Gravity, gravityStore ) {

	module("xit/gravity/create", {
		setup: function(){
			$("#qunit-test-area").append("<form id='create'></form>");
			new GravityCreate("#create");
		},
		teardown: function(){
			$("#qunit-test-area").empty();
			gravityStore.reset();
		}
	});
	
	test("create gravities", function () {
		stop();
		
		Gravity.bind("created",function(ev, gravity){
			ok(true, "Ice Water added");
			equals(gravity.name, "Ice Water", "name set correctly");
			equals(gravity.description, 
				"Pour water in a glass. Add ice cubes.", 
				"description set correctly");
			start();
			Gravity.unbind("created",arguments.callee);
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