var feathers = require('feathers');
var mongodb = require('feathers-mongodb');
var hooks = require('feathers-hooks');
var bodyParser = require('body-parser');

var todoService = mongodb({
  db: 'todo-app',
  collection: 'todos'
});

var dataEngine = feathers()
  .configure(feathers.rest())
  .configure(feathers.socketio())
  .configure(hooks())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended:true}))
  .use('/', feathers.static(__dirname+'../../../canjsTodo'))
  .use('/todos', todoService);

function convertTodo (hook, next) {
  var old = hook.data;

  hook.data = {
    complete: old.complete === true || old.complete === 'true',
    text: old.text
  }
  next();
}

//todo authentication with socketio, use passportjs and passportjs.socketio

dataEngine.lookup('todos').before({
  find: function(hook, next) {
    hook.params.options = { sort: [['text', 1]]};
    next();
  },
  create: convertTodo,
  update: convertTodo
});

dataEngine.listen(8080);
