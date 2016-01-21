var tasks = new TasksCollection([
    new Task({ description: 'Go to the store' }),
    new Task({ description: 'Finish it' }),
    new Task({ description: 'Call mom' })
]);

new AppRouter();
Backbone.history.start();