import { addList, 
    getList, 
    getListWithID,
    updateList,
    deleteList } from '../controllers/controllers.js'

// routes to deal with request
const routes = (app) => {
    app.route('/')
    .get((req,res) =>
        res.send('GET request sucessful!')
    )

    .patch((req,res) =>
        res.send('Patch request sucessful!')
    )

    app.route('/lists')//endpoint/URI for the DOM test
    .get((req,res, next) =>{
        console.log(`URL of where the request is from: ${req.originalUrl}`)
        console.log(`REST Verb used: ${req.method}`)
        next();
    }, getList)
    app.route('/lists')
    
    .post(addList);

    //passing in the unique ID 
    app.route('/lists/:listId')
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