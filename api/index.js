import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import authRouter from './routes/auth.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Database is connected....");
}).catch((err) => {
    console.log(`DB Connection Error is ${err}`);
});

const app = express();
app.use(express.json());
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is currently running on Port ${PORT} `);
});

app.use('/api/auth',authRouter);

//--->>> Middleware to handle error <<<---

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
});
