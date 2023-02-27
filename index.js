require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const routers = require('./routers');
const cors = require('cors')

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use(cors())
app.use('/api', routers);

const start = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.DB_CONNECT)
            .then(() => {
                console.log('DB connected')
            })
            .catch((err) => {
                console.log(`Error: ${err}`)
            });
        app.listen(port,() => console.log(`Server start! Port: ${port}`));
    }catch (e) {
        console.log(e);
    }
}

start();