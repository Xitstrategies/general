var App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.route('about', {path: '/aboutus'});
  this.resource('products'); // Resource Route = noun

  this.route('createNew'); // regular Route adjectives, verbs, or adverbs

});

App.AboutController = Ember.Controller.extend({
    time: function(){
        return (new Date()).toDateString();
    }.property(),

    open: function(){
        if((new Date()).getDay() === 0){
            //Sunday
            return "We are closed";
        }else{
            return "We are open";
        }
    }.property()
    // for declaring properties that get rendered inside the about template.
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

App.IndexController = Ember.Controller.extend({
    productsCount: 6,
    logo: '/images/logo.png'

});

App.PRODUCTS = [{
    title: 'Flint',
    price: 99,
    description: 'Flint is...',
    isOnSale: true,
    image: 'flint.png'
},{
    title: 'Kindling',
    price: 99,
    description: 'Flint is...',
    isOnSale: false,
    image: 'flint.png'
}];

App.ProductsRoute = Ember.Route.extend({
    model: function(){
        return App.PRODUCTS;
    }
});

App.ProductsController = Ember.Controller.extend({

});


