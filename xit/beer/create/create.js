steal('can', 'xit/models/beer.js', './init.mustache', 'jquery/dom/form_params',
	function (can, Beer, init) {

	/**
	 * @constructor xit/beer/create
	 * @alias BeerCreate
	 * @parent xit
	 * @inherits can.Control
	 * Creates beers
	 */
	return can.Control(
	/** @Prototype */
	{
		/**
		 *  Render the initial template
		 */
		init: function () {
			this.element.html(init());
		},
		/**
		 *  Submit handler. Create a new beer from the form.
		 */
		submit: function (el, ev) {
			ev.preventDefault();
			el.find('[type=submit]').val('Creating...');
			new Beer(el.formParams()).save(function() {
				el.find('[type=submit]').val('Create');
				el[0].reset();
			});
		}
	});
});