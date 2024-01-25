const {Task} =  require('../models/task.model')
class TaskService {
    constructor() {
        this.modal = Task;
    }

    create = (body) => {
        console.log({...body}," here");
        return this.modal.create({...body});
    };

    find = (filter) => {
        return this.modal.find({ ...filter });
    };

    findByIdAndUpdate = (id, body) => {
        return this.modal.findByIdAndUpdate(id, {...body});
    };

    findByIdAndDelete = (id, body) => {
        return this.modal.findByIdAndDelete(id);
    };
}

module.exports.TaskService = new TaskService();