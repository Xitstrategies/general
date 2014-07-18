steal('funcunit', 
	'./create.js',
	'xit/models/wort.js',
	'xit/models/fixtures', 
	function (S, WortCreate, Wort, wortStore ) {

	module("xit/wort/create", {
		setup: function(){
			$("#qunit-test-area").append("<form id='create'></form>");
			new WortCreate("#create");
		},
		teardown: function(){
			$("#qunit-test-area").empty();
			wortStore.reset();
		}
	});
	
	test("create worts", function () {
		stop();
		
		Wort.bind("created",function(ev, wort){
			ok(true, "Ice Water added");
			equals(wort.name, "Ice Water", "name set correctly");
			equals(wort.description, 
				"Pour water in a glass. Add ice cubes.", 
				"description set correctly");
			start();
			Wort.unbind("created",arguments.callee);
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