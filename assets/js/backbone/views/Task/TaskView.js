var TaskView = Backbone.View.extend({
    el: $('#app'),

    initialize: function() {
        this.render();
    },

    render: function() {
        var template = _.template($('#task_view_template').html(), {});
        var html = template(this.model.toJSON());
        this.$el.html(html);
    }

});
