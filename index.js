// REST API Server
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/routes';

const app = express ();
const PORT = 3000; // choosing the regular 3000 port

//mongoose connection
mongoose.Promise = global.Promise;//promises used to prevent waiting
mongoose.connect('mongodb://localhost/db');

//Using built in middleware of express for JSON and urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//serve static files to client
//exposed via http://localhost:3000/football.jpeg
app.use(express.static('public'));

//POST - express.json and express.urlencoded
app.post( '/item', (req, res) => {
    console.log(req.body);
    res.send(req.body)
})

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