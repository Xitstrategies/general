steal('can', function(can){
    /**
     * @class xitlib/add_another
	 * @alias AddAnother   
     */
    return can.Control(
	/** @Static */
	{
		defaults : {}
	},
	/** @Prototype */
	{
		init : function(el, template){
			this.element.html(template({}));
		},
        "a.addAnother click": function(el, attr, stuff) {
            var self = this;
            console.log("addNother has been clicked");
            switch(x) {
                case "water":
                    self.addNew(template);
                    break;
                case "hop":
                    break;
                case "malt":
                    break;
                case "gravity":
                    break;
                case "wort":
                    break;
                case "beer":
                    break;
                case "yield":
                    break;
                default:
                    console.log("had an error finding the correct template, Sorry!");
                    break;
            }
        },
        addNew: function() {

        }
	});
});