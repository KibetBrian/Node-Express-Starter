import express, { Request, Response, Express } from 'express'

/**
 * Initialize variables
 */
const app: Express = express();
const PORT: Number = 8080;

/**
 * Middlewares
 */
app.use(express.json({ limit: '5mb' }));

/**
 * Start server
 */
app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`);
})