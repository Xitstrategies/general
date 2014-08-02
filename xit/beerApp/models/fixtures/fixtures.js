// map fixtures for this application
steal("can/util/fixture", function(fixture) {

	var store = fixture.store(5, function(i) {
		return {
			name: "beers "+i,
			description: "beers " + i
		};
	});
	
	fixture({
		'GET /beers' : store.findAll,
		'GET /beers/{id}' : store.findOne,
		'POST /beers' : store.create,
		'PUT /beers/{id}' : store.update,
		'DELETE /beers/{id}' : store.destroy
	});

	return store;

	var store = fixture.store(5, function(i){
		return {
			name: "hop "+i,
			description: "hop " + i
		};
	});

	fixture({
		'GET /hops' : store.findAll,
		'GET /hops/{id}' : store.findOne,
		'POST /hops' : store.create,
		'PUT /hops/{id}' : store.update,
		'DELETE /hops/{id}' : store.destroy
	});

	return store;

	var store = fixture.store(5, function(i){
		return {
			name: "malt "+i,
			description: "malt " + i
		}
	});

	fixture({
		'GET /malts' : store.findAll,
		'GET /malts/{id}' : store.findOne,
		'POST /malts' : store.create,
		'PUT /malts/{id}' : store.update,
		'DELETE /malts/{id}' : store.destroy
	});

	return store;

	var store = fixture.store(5, function(i){
		return {
			name: "wort "+i,
			description: "wort " + i
		}
	});

	fixture({
		'GET /worts' : store.findAll,
		'GET /worts/{id}' : store.findOne,
		'POST /worts' : store.create,
		'PUT /worts/{id}' : store.update,
		'DELETE /worts/{id}' : store.destroy
	});

	return store;

	var store = fixture.store(5, function(i){
		return {
			name: "gravity "+i,
			description: "gravity " + i
		}
	});

	fixture({
		'GET /gravities' : store.findAll,
		'GET /gravities/{id}' : store.findOne,
		'POST /gravities' : store.create,
		'PUT /gravities/{id}' : store.update,
		'DELETE /gravities/{id}' : store.destroy
	});

	return store;

	var store = fixture.store(5, function(i){
		return {
			name: "yield "+i,
			description: "yield " + i
		}
	});

	fixture({
		'GET /yields' : store.findAll,
		'GET /yields/{id}' : store.findOne,
		'POST /yields' : store.create,
		'PUT /yields/{id}' : store.update,
		'DELETE /yields/{id}' : store.destroy
	});

	return store;
});