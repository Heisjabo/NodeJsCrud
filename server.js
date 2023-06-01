const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000
const { errorHandler } = require('./middleware/errorMiddleWare')
const connectDB = require('./config/db')
const cors = require('cors')

connectDB();

const app = express()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/tasks', require('./routes/tasksRoutes'));
app.use(errorHandler)

app.listen(PORT, () => console.log(`server started on port ${PORT}`))

app.get('/', (req, res) => {
    res.send("Hello");
})