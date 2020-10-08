import React from "react";
import express from 'express';
import ReactDOM from 'react-dom/server';
import { indexHtmlTemplate } from './indexHtmlTemplate';
import {App} from "../App";
import {StaticRouter} from "react-router-dom";//исправление ошибки Error: Invariant failed: Browser history needs a DOM

// еще какой-то вариант исправления той же ошибки
// let history
//
// if (typeof document !== 'undefined') {
//   const createBrowserHistory = require('history/createBrowserHistory').default
//
//   history = createBrowserHistory()
// }
//
// export default history

const app = express();//инициализация. Теперь app это instance нашего приложения

app.use('/static', express.static('./dist/client'));//спец роут кот будет раздавать статические файлы. По urlу /static будут доступны все файлы кот лежат в папке dist/client.

app.get('/', (req,res) =>{
    const context={};
    res.send(
        indexHtmlTemplate(ReactDOM.renderToString(
          <StaticRouter location={req.url} context={context}>
              <App/>
          </StaticRouter>
        )),
    );
});
app.listen(3000, ()=>{
    console.log('server started on http://localhost:3000');
});

