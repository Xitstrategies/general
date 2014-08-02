/**
 * Created by js-sheridan on 3/20/14.
 */
//lets try some backbone and learn the MVC idea.

//Models
// encapsulate data from the server to pass to the view.

//Model class
var TodoItem = Backbone.Model.extend({
    urlRoot: '/todos',
    default: {
        description: 'Empty todo...',
        status: 'incomplete'
        }
});

//Model instance
var todoItem = new TodoItem({
    description: 'Pick up milk',
    status: 'incomplete',
    id: 1
});

//gets the json from the server
todoItem.fetch();
//Get an attr
todoItem.get('description');
//to get the JSON from the model
todoItem.toJSON();
//Set an attr
todoItem.set({status: 'complete'});
//Sync with server does a post to the models urlRoot with JSON params
todoItem.save();
//remove/delete items
todoItem.destroy();
//listening for events
todoItem.on('event-name', function(){
    alert('event-name happened!');
});
todoItem.trigger('event-name');

//automatically listening for change, change.attr, destroy, sync, error, all?

//Views
// use the Model to build the HTML/DOM and can feed information back to the model if needed
//View class
var TodoView = Backbone.View.extend({
    render: function(){
        var html = '<h3>'+this.model.get('description')+'</h3>';
        $(this.el).html(html);
    }
});
//View instance  -- note how it passes in the model
var todoView = new TodoView({ model: todoItem});