steal(
	'funcunit',
	'./list.js',
	'xit/models/yield.js',
	'xit/models/fixtures',
	function(S, YieldList, Yield, yieldStore ){

	module("xit/yield/list", { 
		setup: function(){
			$("#qunit-test-area").append("<div id='yields'></div>");
			this.list = new YieldList("#yields");
		},
		teardown: function(){
			$("#qunit-test-area").empty();
			yieldStore.reset();
		}
	});
	
	test("lists all yields", function(){
		stop();
		
		// retrieve yields
		Yield.findAll({}, function(yields){
			// make sure they are listed in the page
			
			S(".yield").size(yields.length,function(){
				ok(true, "All yields listed");
				
				start();
			})
		})
	});
	
	test("lists created yields", function(){
		
		new Yield({
			name: "Grilled Cheese",
			description: "grill cheese in bread"
		}).save();
		
		S('h3:contains(Grilled Cheese X)').exists("Lists created yield");
	})
	
	
	test("delete yields", function(){
		new Yield({
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