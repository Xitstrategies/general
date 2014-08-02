steal('can', function (can) {
	/**
	 * @constructor xit/models/hop
	 * @alias Hop
	 * @parent xit
	 * @inherits can.Model
	 *
	 * Wraps backend hop services.
	 */
	return can.Model(
	/* @static */
	{
		findAll : "GET /hops",
		findOne : "GET /hops/{id}",
		create : "POST /hops",
		update : "PUT /hops/{id}",
		destroy : "DELETE /hops/{id}"
	},
	/* @Prototype */
	{});
});