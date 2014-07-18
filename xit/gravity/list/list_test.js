steal(
	'funcunit',
	'./list.js',
	'xit/models/gravity.js',
	'xit/models/fixtures',
	function(S, GravityList, Gravity, gravityStore ){

	module("xit/gravity/list", { 
		setup: function(){
			$("#qunit-test-area").append("<div id='gravities'></div>");
			this.list = new GravityList("#gravities");
		},
		teardown: function(){
			$("#qunit-test-area").empty();
			gravityStore.reset();
		}
	});
	
	test("lists all gravities", function(){
		stop();
		
		// retrieve gravities
		Gravity.findAll({}, function(gravities){
			// make sure they are listed in the page
			
			S(".gravity").size(gravities.length,function(){
				ok(true, "All gravities listed");
				
				start();
			})
		})
	});
	
	test("lists created gravities", function(){
		
		new Gravity({
			name: "Grilled Cheese",
			description: "grill cheese in bread"
		}).save();
		
		S('h3:contains(Grilled Cheese X)').exists("Lists created gravity");
	})
	
	
	test("delete gravities", function(){
		new Gravity({
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