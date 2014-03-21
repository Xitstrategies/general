/**
 * Created by Morgan on 3/19/14.
 */

var Todomodel = can.Model({
    findAll: 'GET /toDoApp',
    findOne: 'GET /toDoApp/{id}',
    create: 'POST /toDoApp',
    update: 'PUT /toDoApp/{id}',
    destroy: 'DELETE /toDoApp/{id}'
},{
})

var myTodo = new Todomodel();

