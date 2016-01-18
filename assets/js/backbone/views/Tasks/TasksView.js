var TasksView = Backbone.View.extend({
    el: $('#app'),

    initialize: function() {
        this.render();
    },

    render: function() {
        var template = _.template($('#tasks_view_template').html(), {});
        this.$el.html(template);
    }

});
