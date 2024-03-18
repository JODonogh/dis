// REST API Server
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/routes.js';
import compress from 'compression';// importing the use of 
import path from 'path';
import cors from 'cors';
const __dirname = path.resolve();

const app = express ();
const PORT = 3000; // choosing the regular 3000 port

app.use(express.static(path.join(__dirname, '.angular/dist/angular')))// express middleware to serve static files (scripts/images)
app.use(cors()); 

//configuring the behaviour of the server
//enabling etag caching for the entire application
app.set('etag', true )
app.use(compress( { filter:decideCompress, threshold: 128 }))

//this functions purpose is to decide if the a response should be compressed
function decideCompress (req, res){
    if (req.headers['x-no-compression']){
        console.log('compression disabled for request', req.url)
        return false;
    } else{
        console.log('compression enabled for the request', req.url)
        return compress.filter(req, res)// default filter function
    }
}

//mongoose connection
mongoose.Promise = global.Promise;//promises used to prevent waiting
mongoose.connect('mongodb://localhost/db');

//Using built in middleware of express for JSON and urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

//serve static files to client
//exposed via http://localhost:3000/static/football.jpeg
//setting up caching with the Etag and maxAge in the Header
app.use('/static', express.static('public', {etag: true, maxAge: 360000}));

routes(app); //sending the express instance to routes.js

//error handling route
app.use((err, req, res, next ) => {//arguments for error handler
    console.error(err.stack);// the stack trace of the error 
    res.status(500).send('Something went wrong');
})

 // listening to see if the server is running 
 app.listen(PORT, () => 
    console.log(`Your server is runing on port ${PORT}`)
 );