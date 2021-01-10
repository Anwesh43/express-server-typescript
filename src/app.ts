import express from 'express'
import * as bodyParser from 'body-parser'


const initServer =  (port : number) => {
    const app : express.Application  = express()
    app.use(bodyParser.json());
    app.get('/hello', (req : express.Request, res : express.Response) => {
        console.log("hello world")
        res.send("hello")
    })
    app.listen(port, () => {
        console.log("started listening");
    })
}

initServer(4000)