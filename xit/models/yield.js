steal('can', function (can) {
	/**
	 * @constructor xit/models/yield
	 * @alias Yield
	 * @parent xit
	 * @inherits can.Model
	 *
	 * Wraps backend yield services.
	 */
	return can.Model(
	/* @static */
	{
		findAll : "GET /yields",
		findOne : "GET /yields/{id}",
		create : "POST /yields",
		update : "PUT /yields/{id}",
		destroy : "DELETE /yields/{id}"
	},
	/* @Prototype */
	{});
});