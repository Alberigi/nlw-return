import express from 'express'
import { routes } from './routes'
import cors from 'cors'

const app = express()

app.use((_req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});
app.use(express.json())
app.use(routes)


app.listen(process.env.PORT || 3333,()=> {
    console.log(`Aplicação rodando na Porta: ${3333}`);
})