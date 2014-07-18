steal('can', 'xit/models/wort.js', './init.ejs', 'jquery/dom/form_params',
	function (can, Wort, initEJS) {

	/**
	 * @constructor xit/wort/create
	 * @alias WortCreate
	 * @parent xit
	 * @inherits can.Control
	 * Creates worts
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
		 *  Submit handler. Create a new wort from the form.
		 */
		submit: function (el, ev) {
			ev.preventDefault();
			el.find('[type=submit]').val('Creating...')
			new Wort(el.formParams()).save(function() {
				el.find('[type=submit]').val('Create');
				el[0].reset()
			});
		}
	});
});