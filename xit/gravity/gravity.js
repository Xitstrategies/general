steal('can', 'xit/models/gravity.js', './init.mustache', 'jquery/dom/form_params',
	function (can, Gravity, initView) {

	/**
	 * @constructor xit/gravity/create
	 * @alias GravityCreate
	 * @parent xit
	 * @inherits can.Control
	 * Creates gravities
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
		 *  Submit handler. Create a new gravity from the form.
		 */
		submit: function (el, ev) {
			ev.preventDefault();
			el.find('[type=submit]').val('Creating...')
			new Gravity(el.formParams()).save(function() {
				el.find('[type=submit]').val('Create');
				el[0].reset()
			});
		}
	});
});