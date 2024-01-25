
const { TaskService } = require("../services/task.service");

class TaskControllers {
  create = async (req, res) => {
    const task = await TaskService.create({
      ...req.body,
    });
    console.log(req.body,"here 2");
    res.send(task)
  };
  getAll = async (req, res) => {
    const tasks = await TaskService.find();
    res.send(tasks);
  };
  
  edit = async (req, res) => {
    const task = await TaskService.findByIdAndUpdate(req.params.id, {
      ...req.body,
    });
    res.send(task);
  };
  delete = async (req, res) => {
    await TaskService.findByIdAndDelete(req.params.id);
    res.send("Successfully delete");
  };
}

module.exports.TaskControllers = new TaskControllers();
