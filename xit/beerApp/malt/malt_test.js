steal('funcunit', 
	'./create.js',
	'xit/models/malt.js',
	'xit/models/fixtures', 
	function (S, MaltCreate, Malt, maltStore ) {

	module("xit/malt/create", {
		setup: function(){
			$("#qunit-test-area").append("<form id='create'></form>");
			new MaltCreate("#create");
		},
		teardown: function(){
			$("#qunit-test-area").empty();
			maltStore.reset();
		}
	});
	
	test("create malts", function () {
		stop();
		
		Malt.bind("created",function(ev, malt){
			ok(true, "Ice Water added");
			equals(malt.name, "Ice Water", "name set correctly");
			equals(malt.description, 
				"Pour water in a glass. Add ice cubes.", 
				"description set correctly");
			start();
			Malt.unbind("created",arguments.callee);
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