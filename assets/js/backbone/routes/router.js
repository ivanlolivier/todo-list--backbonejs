var Router = Backbone.Router.extend({
    routes: {
        '': 'tasksList',
        'tasks': 'tasksList',

        tasksList: function(){
            new TasksView();
        }
    }
});

var router = new Router();
Backbone.history.start();
