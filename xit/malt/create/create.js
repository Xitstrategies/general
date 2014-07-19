steal('can', 'xit/models/malt.js', './init.mustache', 'jquery/dom/form_params', './create.less',
	function (can, Malt, initView) {

	/**
	 * @constructor xit/malt/create
	 * @alias MaltCreate
	 * @parent xit
	 * @inherits can.Control
	 * Creates malts
	 */
	return can.Control(
	/** @Prototype */
	{
		/**
		 *  Render the initial template
		 */
		init: function () {
            var self = this,
                opts = this.options;
            opts.malt = new can.Map({
                visible: false,
                toggle: function() {
                    this.attr("visible", !this.attr("visible"));
                }
            });
            this.element.html(initView({ malt: opts.malt }));
        },
        /**
         *  Submit handler. Create a new water from the form.
         */
        submit: function (el, ev) {
            ev.preventDefault();
            el.find('[type=submit]').val('Creating...');
            new Water(el.formParams()).save(function() {
                el.find('[type=submit]').val('Create');
                el[0].reset();
            });
        }
	});
});