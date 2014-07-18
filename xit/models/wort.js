steal('can', function (can) {
	/**
	 * @constructor xit/models/wort
	 * @alias Wort
	 * @parent xit
	 * @inherits can.Model
	 *
	 * Wraps backend wort services.
	 */
	return can.Model(
	/* @static */
	{
		findAll : "GET /worts",
		findOne : "GET /worts/{id}",
		create : "POST /worts",
		update : "PUT /worts/{id}",
		destroy : "DELETE /worts/{id}"
	},
	/* @Prototype */
	{});
});