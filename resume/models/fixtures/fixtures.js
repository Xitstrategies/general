// map fixtures for this application
steal("can/util/fixture", function(fixture) {

	var store = fixture.store(5, function(i){
		return {
			name: "experience "+i,
			description: "experience " + i
		}
	});
	
	fixture({
		'GET /experiences' : store.findAll,
		'GET /experiences/{id}' : store.findOne,
		'POST /experiences' : store.create,
		'PUT /experiences/{id}' : store.update,
		'DELETE /experiences/{id}' : store.destroy
	});

	return store;
});