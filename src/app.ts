import express, {Request, Response, NextFunction} from "express"

const app = express()

import todoRoutes from './routes/todos'

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/todos', todoRoutes)

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.json({ message: error.message });
});

app.listen(3011, () => {
    console.log('Server is started at http://localhost:3011')
})