steal('can', function (can) {
	/**
	 * @constructor xit/models/malt
	 * @alias Malt
	 * @parent xit
	 * @inherits can.Model
	 *
	 * Wraps backend malt services.
	 */
	return can.Model(
	/* @static */
	{
		findAll : "GET /malts",
		findOne : "GET /malts/{id}",
		create : "POST /malts",
		update : "PUT /malts/{id}",
		destroy : "DELETE /malts/{id}"
	},
	/* @Prototype */
	{});
});