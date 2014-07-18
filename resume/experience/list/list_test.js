steal(
	'funcunit',
	'./list.js',
	'resume/models/experience.js',
	'resume/models/fixtures',
	function(S, ExperienceList, Experience, experienceStore ){

	module("resume/experience/list", { 
		setup: function(){
			$("#qunit-test-area").append("<div id='experiences'></div>");
			this.list = new ExperienceList("#experiences");
		},
		teardown: function(){
			$("#qunit-test-area").empty();
			experienceStore.reset();
		}
	});
	
	test("lists all experiences", function(){
		stop();
		
		// retrieve experiences
		Experience.findAll({}, function(experiences){
			// make sure they are listed in the page
			
			S(".experience").size(experiences.length,function(){
				ok(true, "All experiences listed");
				
				start();
			})
		})
	});
	
	test("lists created experiences", function(){
		
		new Experience({
			name: "Grilled Cheese",
			description: "grill cheese in bread"
		}).save();
		
		S('h3:contains(Grilled Cheese X)').exists("Lists created experience");
	})
	
	
	test("delete experiences", function(){
		new Experience({
			name: "Ice Water",
			description: "mix ice and water"
		}).save();
		
		// wait until grilled cheese has been added
		S('h3:contains(Ice Water X)').exists();
		
		S.confirm(true);
		S('h3:last a').click();
		
		
		S('h3:contains(Ice Water)').missing("Grilled Cheese Removed");
		
	});


});