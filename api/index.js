import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Database is connected....");
}).catch((err) => {
    console.log(`DB Connection Error is ${err}`);
});

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is currently running on Port ${PORT} `);
});