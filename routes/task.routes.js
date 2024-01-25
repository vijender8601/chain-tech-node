const express = require('express');
const { TaskControllers } = require('../controllers/task.controllers');
const route = express.Router();


// get method
route.get('/', TaskControllers.getAll);

// post method
route.post('/', TaskControllers.create);

// put or patch method
route.patch('/:id',TaskControllers.edit)

// delete
route.delete('/:id', TaskControllers.delete);

module.exports.TaskRouter = route;
