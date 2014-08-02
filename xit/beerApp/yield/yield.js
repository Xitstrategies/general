steal('can', 'xit/models/yield.js', './init.mustache', 'jquery/dom/form_params',
	function (can, Yield, initView) {

	/**
	 * @constructor xit/yield/create
	 * @alias YieldCreate
	 * @parent xit
	 * @inherits can.Control
	 * Creates yields
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
		 *  Submit handler. Create a new yield from the form.
		 */
		submit: function (el, ev) {
			ev.preventDefault();
			el.find('[type=submit]').val('Creating...')
			new Yield(el.formParams()).save(function() {
				el.find('[type=submit]').val('Create');
				el[0].reset()
			});
		}
	});
});