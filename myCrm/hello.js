/**
 * Created by Morgan on 5/30/2014.
 */
steal("can/component", function() {

    can.Component.extend({
        tag: "hello-world",
        template: "{{#if visible}}{{message}}{{else}}Click me{{/if}}",
        scope: {
            visible: false,
            message: "Hello There!"
        },
        events: {
            click: function(){
                this.scope.attr("visible", !this.scope.attr("visible") );
            }
        }
    });

    $("body").append(can.view.mustache("<hello-world/>")({}))
});