/**
 * Created by Morgan on 3/21/14.
 */
//Models and Views


//Backbone and CanJs are so similar.

//    .complete{color: #bbb; text-decoration: line-through;}

//Backbone Model
var TodoItem = Backbone.Model.extend({
    toggleStatus: function(){
        if(this.get('status') === 'incomplete'){
            this.set({'status': 'complete'});
        }else{
            this.set({'status': 'incomplete'});
        }
        this.save();
    }
});

//Backbone View
var TodoView = Backbone.View.extend({
    template: _.template('<h3 class="<%=status%">' +
        '<input type=checkbox ' +
        '<% if(status === "complete") print("checked") %>/>' +
        '<%= description %></h3>'),
    initialize: function(){
        this.model.on('change', this.render, this);
        this.model.on('destroy', this.remove, this);
    },
    events: {'change input': 'toggleStatus'},
    toggleStatus: function(){
      this.model.toggleStatus();
      //this.render(); removed to make the initialize function instead
    },
    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
    },
    remove: function(){
        this.$el.remove();
    }
});

var todoView = new TodoView({ model: todoItem});

todoView.render();

console.log(todoView.el);
