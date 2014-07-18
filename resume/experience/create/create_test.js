steal('funcunit', 
	'./create.js',
	'resume/models/experience.js',
	'resume/models/fixtures', 
	function (S, ExperienceCreate, Experience, experienceStore ) {

	module("resume/experience/create", {
		setup: function(){
			$("#qunit-test-area").append("<form id='create'></form>");
			new ExperienceCreate("#create");
		},
		teardown: function(){
			$("#qunit-test-area").empty();
			experienceStore.reset();
		}
	});
	
	test("create experiences", function () {
		stop();
		
		Experience.bind("created",function(ev, experience){
			ok(true, "Ice Water added");
			equals(experience.name, "Ice Water", "name set correctly");
			equals(experience.description, 
				"Pour water in a glass. Add ice cubes.", 
				"description set correctly");
			start();
			Experience.unbind("created",arguments.callee);
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