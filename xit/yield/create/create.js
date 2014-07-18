steal('can', 'xit/models/yield.js', './init.ejs', 'jquery/dom/form_params',
	function (can, Yield, initEJS) {

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
			this.element.html(initEJS());
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