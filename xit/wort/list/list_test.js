steal(
	'funcunit',
	'./list.js',
	'xit/models/wort.js',
	'xit/models/fixtures',
	function(S, WortList, Wort, wortStore ){

	module("xit/wort/list", { 
		setup: function(){
			$("#qunit-test-area").append("<div id='worts'></div>");
			this.list = new WortList("#worts");
		},
		teardown: function(){
			$("#qunit-test-area").empty();
			wortStore.reset();
		}
	});
	
	test("lists all worts", function(){
		stop();
		
		// retrieve worts
		Wort.findAll({}, function(worts){
			// make sure they are listed in the page
			
			S(".wort").size(worts.length,function(){
				ok(true, "All worts listed");
				
				start();
			})
		})
	});
	
	test("lists created worts", function(){
		
		new Wort({
			name: "Grilled Cheese",
			description: "grill cheese in bread"
		}).save();
		
		S('h3:contains(Grilled Cheese X)').exists("Lists created wort");
	})
	
	
	test("delete worts", function(){
		new Wort({
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