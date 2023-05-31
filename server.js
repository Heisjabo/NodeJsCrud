const express = require('express')
const dotenv = require('dotenv')
const port = process.env.PORT || 5000
const { errorHandler } = require('./middleware/errorMiddleWare')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/tasks', require('./routes/tasksRoutes'));
app.use(errorHandler)

app.listen(port, () => console.log(`server started on port ${port}`))

app.get('/', (req, res) => {
    res.send("Hello");
})