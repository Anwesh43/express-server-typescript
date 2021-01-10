import express from 'express'
import * as bodyParser from 'body-parser'
import Book from './models/Book';
import {save} from './fileutils'

const FILE_NAME = 'books'
const initServer =  (port : number) => {
    const app : express.Application  = express()
    app.use(bodyParser.json());
    app.get('/hello', (req : express.Request, res : express.Response) => {
        console.log("hello world")
        res.send("hello")
    })
    app.post('/saveToFile', (req : express.Request, res : express.Response) => {
        console.log("BODY", req.body)
        const book : Book = req.body as Book 
        save(FILE_NAME, `${book.name} is written by ${book.author} and is ${book.pages} pages long`)
        res.json({status: "OK"})
    })
    app.listen(port, () => {
        console.log("started listening");
    })
}

initServer(4000)