steal(
	'funcunit',
	'./models/hop_test.js',
	'xit/hop/create/create_test.js',
	'xit/hop/list/list_test.js',
	'./models/beer_test.js',
	'xit/beer/create/create_test.js',
	'xit/beer/list/list_test.js',
	'./models/malt_test.js',
	'xit/malt/create/create_test.js',
	'xit/malt/list/list_test.js',
	'./models/wort_test.js',
	'xit/wort/create/create_test.js',
	'xit/wort/list/list_test.js',
	'./models/gravity_test.js',
	'xit/gravity/create/create_test.js',
	'xit/gravity/list/list_test.js',
	'./models/yield_test.js',
	'xit/yield/create/create_test.js',
	'xit/yield/list/list_test.js',
	function (S) {

	// this tests the assembly 
	module("xit", {
		setup : function () {
			S.open("//xit/index.html");
		}
	});

	test("welcome test", function () {
		equals(S("h1").text(), "Welcome to JavaScriptMVC!", "welcome text");
	});

	
	test("creating a hops adds it to the list ", function () {
		
		S("[name=name]").type("Ice Water");
		S("[name=description]").type("Pour water in a glass. Add ice cubes.");
		
		S("[type=submit]").click();
		
		S("h3:contains(Ice Water)").exists();
		S("p:contains(Pour water in a glass. Add ice cubes.)").exists()
	});
	
	test("creating a beers adds it to the list ", function () {
		
		S("[name=name]").type("Ice Water");
		S("[name=description]").type("Pour water in a glass. Add ice cubes.");
		
		S("[type=submit]").click();
		
		S("h3:contains(Ice Water)").exists();
		S("p:contains(Pour water in a glass. Add ice cubes.)").exists()
	});
	
	test("creating a malts adds it to the list ", function () {
		
		S("[name=name]").type("Ice Water");
		S("[name=description]").type("Pour water in a glass. Add ice cubes.");
		
		S("[type=submit]").click();
		
		S("h3:contains(Ice Water)").exists();
		S("p:contains(Pour water in a glass. Add ice cubes.)").exists()
	});
	
	test("creating a worts adds it to the list ", function () {
		
		S("[name=name]").type("Ice Water");
		S("[name=description]").type("Pour water in a glass. Add ice cubes.");
		
		S("[type=submit]").click();
		
		S("h3:contains(Ice Water)").exists();
		S("p:contains(Pour water in a glass. Add ice cubes.)").exists()
	});
	
	test("creating a gravities adds it to the list ", function () {
		
		S("[name=name]").type("Ice Water");
		S("[name=description]").type("Pour water in a glass. Add ice cubes.");
		
		S("[type=submit]").click();
		
		S("h3:contains(Ice Water)").exists();
		S("p:contains(Pour water in a glass. Add ice cubes.)").exists()
	});
	
	test("creating a yields adds it to the list ", function () {
		
		S("[name=name]").type("Ice Water");
		S("[name=description]").type("Pour water in a glass. Add ice cubes.");
		
		S("[type=submit]").click();
		
		S("h3:contains(Ice Water)").exists();
		S("p:contains(Pour water in a glass. Add ice cubes.)").exists()
	});
});
