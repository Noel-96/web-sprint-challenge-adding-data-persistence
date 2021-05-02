exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, task_description: 'Test data using TablePlus', task_notes: "endpoints working as expected", task_completed: false, project_id: 3},
        {id: 2, task_description: 'Use middleware to verify id and payload', task_notes: "middleware is working as expected", task_completed: true, project_id: 2},
        {id: 3, task_description: 'test task data', task_notes: "", task_completed: false, project_id: 1}
      ]);
    });
};