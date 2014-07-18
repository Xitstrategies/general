steal('can', 'xit/models/hop.js', './init.mustache', 'jquery/dom/form_params', './create.less',
	function (can, Hop, initView) {

	/**
	 * @constructor xit/hop
	 * @alias Hop
	 * @parent xit
	 * @inherits can.Control
	 * Creates hops
	 */
	return can.Control(
	/** @Prototype */
	{
		/**
		 *  Render the initial template
		 */
		init: function () {
			this.element.html(initView());
		},
		/**
		 *  Submit handler. Create a new hop from the form.
		 */
		submit: function (el, ev) {
			ev.preventDefault();
			el.find('[type=submit]').val('Creating...');
			new Hop(el.formParams()).save(function() {
				el.find('[type=submit]').val('Create');
				el[0].reset();
			});
		}
	});
});