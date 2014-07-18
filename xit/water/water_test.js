steal('xit/water','funcunit', function( Water, S ) {

	module("xit/water", { 
		setup: function(){
			S.open( window );
			$("#qunit-test-area").html("<div id='water'></div>")
		},
		teardown: function(){
			$("#qunit-test-area").empty();
		}
	});
	
	test("updates the element's html", function(){
		new Water('#water');
		ok( $('#water').html() , "updated html" );
	});

});