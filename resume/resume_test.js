steal(
	'funcunit',
	'./models/experience_test.js',
	'resume/experience/create/create_test.js',
	'resume/experience/list/list_test.js',
	function (S) {

	// this tests the assembly 
	module("resume", {
		setup : function () {
			S.open("//resume/index.html");
		}
	});

	test("welcome test", function () {
		equals(S("h1").text(), "Welcome to JavaScriptMVC!", "welcome text");
	});

	
	test("creating a experiences adds it to the list ", function () {
		
		S("[name=name]").type("Ice Water");
		S("[name=description]").type("Pour water in a glass. Add ice cubes.");
		
		S("[type=submit]").click();
		
		S("h3:contains(Ice Water)").exists();
		S("p:contains(Pour water in a glass. Add ice cubes.)").exists()
	});
});
