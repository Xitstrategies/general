steal('xitlib/timer','funcunit', function( Timer, S ) {

	module("xitlib/timer", { 
		setup: function(){
			S.open( window );
			$("#qunit-test-area").html("<div id='timer'></div>")
		},
		teardown: function(){
			$("#qunit-test-area").empty();
		}
	});
	
	test("updates the element's html", function(){
		new Timer('#timer');
		ok( $('#timer').html() , "updated html" );
	});

});