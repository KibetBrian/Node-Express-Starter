import express, { Request, Response, Express } from 'express'
import dotenv from 'dotenv';
dotenv.config();
import ConnectDb from './configs/db';

/**
 * Initialize Global Variables
 */
const app: Express = express();
const PORT: Number = 8080;


/**
 * Connect DB
 */
ConnectDb();

/**
 * Middlewares
 */
app.use(express.json({ limit: '5mb' }));

/**
 * Routes
 */
app.get('/', (req: Request, res: Response)=>{
    res.json("Hello Express")
})

/**
 * Start server
 */
app.listen(PORT, () => {
    console.clear();
    console.log(`Server running at port: ${PORT}`);
});