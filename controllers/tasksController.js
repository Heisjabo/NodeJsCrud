const asyncHandler = require('express-async-handler')

const Task = require('../models/tasksmodel')

// @desc Get goals
// @route /api/goals
// @access Private
const getTasks = asyncHandler(async (req, res) => {
    const tasks = await Task.find()

    res.status(200).json(tasks)
})

// @desc set goals
// @route POST /api/goals
// @access Private
const setTask = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error("Please add a text field");
    }

    const task = await Task.create({
        text: req.body.text
    })

    res.status(200).json(task);
})


// @desc Update goals
// @route PUT /api/goals/:id
// @access Private
const updateTask = asyncHandler(async (req, res) => {

    const task = await Task.findById(req.params.id)
    if(!task){
        res.status(400)
        throw new Error('Task not found')
    }

    const updatedTask = await Task.findByIdAndUpdate(req.params.id, { text: req.body.text}, {
        new: true,
    })


    res.status(200).json(updatedTask);
})


// @desc Delete goals
// @route DELETE /api/goalS/:id
// @access Private
const deleteTask = asyncHandler(async (req, res) => {

    const task = await Task.findById(req.params.id);
    if (!task) {
       res.status(400);
       throw new Error("Task not found");
    }

    await Task.findByIdAndDelete(req.params.id);

    res.status(200).json({ id: `${req.params.id}` });
})

module.exports = {
    getTasks,
    setTask,
    updateTask,
    deleteTask
}