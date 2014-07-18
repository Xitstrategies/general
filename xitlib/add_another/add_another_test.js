steal('xitlib/add_another','funcunit', function( AddAnother, S ) {

	module("xitlib/add_another", { 
		setup: function(){
			S.open( window );
			$("#qunit-test-area").html("<div id='add_another'></div>")
		},
		teardown: function(){
			$("#qunit-test-area").empty();
		}
	});
	
	test("updates the element's html", function(){
		new AddAnother('#add_another');
		ok( $('#add_another').html() , "updated html" );
	});

});