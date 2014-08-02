steal('can', function (can) {
	/**
	 * @constructor xit/models/gravity
	 * @alias Gravity
	 * @parent xit
	 * @inherits can.Model
	 *
	 * Wraps backend gravity services.
	 */
	return can.Model(
	/* @static */
	{
		findAll : "GET /gravities",
		findOne : "GET /gravities/{id}",
		create : "POST /gravities",
		update : "PUT /gravities/{id}",
		destroy : "DELETE /gravities/{id}"
	},
	/* @Prototype */
	{});
});