import { addList, 
    getList, 
    getListWithID,
    updateList,
    deleteList } from '../controllers/controllers'

   
// routes to call the Uniform Resource Identifier (URI) for a resource to get back 
const routes = (app) => {//getting created express instance from index.js
    app.route('/')//creating an endpoint or URI
    .get((req,res) =>
        res.send('GET request sucessful!')
    )
    
    app.route('/list')//creating an endpoint or URI
    .get((req,res, next) =>{
        console.log(`URL of where the request is from: ${req.originalUrl}`)//getting the original UR Location from requestor
        console.log(`REST Verb used: ${req.method}`)//examing the REST verb the requester used
        next();//do the official response
    }, getList)

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
}

export default routes;