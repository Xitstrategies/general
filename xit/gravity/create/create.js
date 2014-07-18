steal('can', 'xit/models/gravity.js', './init.ejs', 'jquery/dom/form_params',
	function (can, Gravity, initEJS) {

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
			this.element.html(initEJS());
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