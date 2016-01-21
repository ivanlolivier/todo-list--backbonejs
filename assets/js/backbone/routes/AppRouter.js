var AppRouter = Backbone.Router.extend({
    routes: {
        "": "tasksList",
        "tasks": "tasksList",
        "task/:cid": "taskDetails"
    },

    tasksList: function () {
        new TasksView({ model: tasks });
    },

    taskDetails: function (cid) {
        var task = tasks.get({ cid: cid });
        new TaskView({ model: task });
    }

});

