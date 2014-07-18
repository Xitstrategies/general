steal('can', function (can) {
	/**
	 * @constructor resume/models/experience
	 * @alias Experience
	 * @parent resume
	 * @inherits can.Model
	 *
	 * Wraps backend experience services.
	 */
	return can.Model(
	/* @static */
	{
		/**
 		 * Find all experiences
		 */
		findAll : "GET /experiences",
		/**
 		 * Find one experience
		 */
		findOne : "GET /experiences/{id}",
		/**
 		 * Create a experience
		 */
		create : "POST /experiences",
		/**
		 * Update a experience
		 */
		update : "PUT /experiences/{id}",
		/**
		 * Destroy a experience
		 */
		destroy : "DELETE /experiences/{id}"
	},
	/* @Prototype */
	{});
});