steal('funcunit', 
	'./hop.js',
	'xit/models/hop.js',
	'xit/models/fixtures', 
	function (S, HopCreate, Hop, hopStore ) {

	module("xit/hop", {
		setup: function(){
			$("#qunit-test-area").append("<form id='create'></form>");
			new HopCreate("#create");
		},
		teardown: function(){
			$("#qunit-test-area").empty();
			hopStore.reset();
		}
	});
	
	test("create hops", function () {
		stop();
		
		Hop.bind("created",function(ev, hop){
			ok(true, "Ice Water added");
			equals(hop.name, "Ice Water", "name set correctly");
			equals(hop.description, 
				"Pour water in a glass. Add ice cubes.", 
				"description set correctly");
			start();
			Hop.unbind("created",arguments.callee);
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