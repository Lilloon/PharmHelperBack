import express from 'express';
import popularRouter from './routes/popular.routes.js'
import DrugsRouter from './routes/Drugs.routes.js'

const port = 5000;

const app = express();

app.listen(port, () => { console.log('server started')})

app.use(express.json());
app.use('/api', popularRouter)
app.use('/api', DrugsRouter)
