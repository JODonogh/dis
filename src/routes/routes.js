import { addList, 
    getList, 
    getListWithID,
    updateList,
    deleteList } from '../controllers/controllers.js'

// routes to deal with request
// routes to call the Uniform Resource Identifier (URI) for a resource to get back 
const routes = (app) => {//getting created express instance from index.js
    app.route('/')//creating an endpoint or URI
    .get((req,res) =>
        res.send('GET request sucessful!')
    )
    app.route('/options')//creating an endpoint for UI options
    .get((req,res) =>
        res.send('GET request sucessful!')
    )
    .patch((req,res) =>
        res.send('Patch request sucessful!')
    )

    app.route('/list')//endpoint/URI for the DOM test
    .get((req,res, next) =>{
        console.log(`URL of where the request is from: ${req.originalUrl}`)//getting the original UR Location from requestor
        console.log(`REST Verb used: ${req.method}`)//examing the REST verb the requester used
        next();//do the official response
    }, getList)//decoupling data layer from routes layer

    //passing in the contacts created from the controller response
    .post(addList);//passing in the function/controller into the post command

    //passing in the unique ID 
    app.route('/list/:listId')
    //get list item
    .get(getListWithID)

    //updating list item
    .put(updateList)

    //delete list item
    .delete(deleteList)

    app.route('/form')//endpoint for the data binding form test
    .get((req,res) =>
        res.send('GET request sucessful!')
    )

    .put((req,res) =>
        res.send('Patch request sucessful!')
    )

    .post((req,res) =>
        res.send('Post request sucessful!')
    )

    .delete((req,res) =>
    res.send('Delete request sucessful!')
    )

    //endpoint for the results 
    app.route('/results')
    .get((req,res) =>
        res.send('GET request sucessful!')
    )

    .put((req,res) =>
        res.send('Patch request sucessful!')
    )

    .post((req,res) =>
        res.send('Post request sucessful!')
    )

    .delete((req,res) =>
    res.send('Delete request sucessful!')
    )
    //creating a URI to redirect
    app.get('/redirect', (req, res) => {
        res.redirect('https://github.com/JODonogh/dis')
})
}

export default routes;