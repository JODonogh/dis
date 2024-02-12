// REST API Server
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/routes';

const app = express ();
const PORT = 3000; // choosing the regular 3000 port

//mongoose connection
mongoose.Promise = global.Promise;//promises used to prevent waiting
mongoose.connect('mongodb://localhost/db',{//connecting with mongoose
    useNewUrlParser: true
});

//bodyparser- allows the sending of the mongoDB representation to the express server in JSON format
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//serve static files to client
//exposed via http://localhost:3000/football.jpeg
app.use(express.static('public'));

routes(app); //sending the express instance to routes.js

//basic 404 handler taken from Ferreira dissertation
app.use((req, res)=>{
    res.status(404).send('Not Found');
})

//basic error handler taken from Ferreira dissertation
app.use((err, req, res)=> {
    // if the route has a specific error response, this is sent otherwise send 500
    console.error(err);
    res.status(500).send(err.response || "oops something went wrong");
});

 // listening to see if the server is running 
 app.listen(PORT, () => 
    console.log(`Your server is runing on port ${PORT}`)
 );