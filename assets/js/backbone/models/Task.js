var Task = Backbone.Model.extend({
    defaults: {
        description: '',
        completed: false
    },

    toJSON: function() {
        var json = Backbone.Model.prototype.toJSON.apply(this, arguments);
        json.cid = this.cid;
        return json;
    }
});
