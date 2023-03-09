import express,{ Request,Express } from "express";
import shopRouter from './shops/shops.routes';
import connectToDb from './database/db';

const app:Express = express();
const port = 3000;

app.use('/shops',shopRouter)

connectToDb('mongodb://127.0.0.1:27017/test');
app.listen(port, ()=>{
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
})

module.exports = app;