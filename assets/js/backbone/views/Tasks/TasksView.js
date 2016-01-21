var TasksView = Backbone.View.extend({
    el: $('#app'),

    events: {
        'click button': 'addTask',
        'click .delete-task': 'deleteTask',
        'click .complete-task': 'completeTask'
    },

    addTask: function(e) {
        e.preventDefault();

        this.model.add( new Task({ description: $('#newTask').val() }) );
        $('#newTask').val('');
    },

    deleteTask: function(e) {
        e.preventDefault();

        this.model.remove( this.model.get({ cid: $(e.target).parents('.task').data('cid') }) );
    },

    completeTask: function(e) {
        e.preventDefault();

        var task = this.model.get({ cid: $(e.target).parents('.task').data('cid') });
        task.set({ completed: true });

        this.render();
    },

    initialize: function() {
        this.render();

        this.listenTo(this.model, "add", this.render);
        this.listenTo(this.model, "remove", this.render);
    },

    render: function() {
        var template = _.template($('#tasks_view_template').html(), {});
        var html = template({ tasks: this.model.toJSON() });

        this.$el.html(html);
    }

});
