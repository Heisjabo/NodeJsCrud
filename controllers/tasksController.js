const asyncHandler = require('express-async-handler')

// @desc Get goals
// @route /api/goals
// @access Private
const getTasks = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get tasks'})
})

// @desc set goals
// @route POST /api/goals
// @access Private
const setTask = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error("Please add a text field");
    }

    res.status(200).json({message: 'Set task'});
})


// @desc Update goals
// @route PUT /api/goals/:id
// @access Private
const updateTask = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update Task ${req.params.id}` });
})


// @desc Delete goals
// @route DELETE /api/goalS/:id
// @access Private
const deleteTask = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `delete goal ${req.params.id}` });
})

module.exports = {
    getTasks,
    setTask,
    updateTask,
    deleteTask
}