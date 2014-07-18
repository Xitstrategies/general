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
//			this.element.html(initView({}));
        },
        "div#malts h3 click": function(el) {
            this.createView(el);
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
        },
        createView: function(el){
            el.append(initView({}));
        }
	});
});