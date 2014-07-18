steal(
	'funcunit',
	'./list.js',
	'xit/models/malt.js',
	'xit/models/fixtures',
	function(S, MaltList, Malt, maltStore ){

	module("xit/malt/list", { 
		setup: function(){
			$("#qunit-test-area").append("<div id='malts'></div>");
			this.list = new MaltList("#malts");
		},
		teardown: function(){
			$("#qunit-test-area").empty();
			maltStore.reset();
		}
	});
	
	test("lists all malts", function(){
		stop();
		
		// retrieve malts
		Malt.findAll({}, function(malts){
			// make sure they are listed in the page
			
			S(".malt").size(malts.length,function(){
				ok(true, "All malts listed");
				
				start();
			})
		})
	});
	
	test("lists created malts", function(){
		
		new Malt({
			name: "Grilled Cheese",
			description: "grill cheese in bread"
		}).save();
		
		S('h3:contains(Grilled Cheese X)').exists("Lists created malt");
	})
	
	
	test("delete malts", function(){
		new Malt({
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