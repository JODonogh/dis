import { mongo_methods } from './controllers_MongoDB'
//controllers to interact with the data layer
// we could change the methods to call SQL for instance
//This puts the list into the database before the use of GET

export const addList = (req, res) => {
    mongo_methods.mongo_addList(req, res);
};

//GET request sent to decoupled mongoDB controller
export const getList = (req, res) => {
    mongo_methods.mongo_getList(req, res);
};

//Updating mongoDB list item by ID
export const getListWithID = (req, res) => {
    mongo_methods.mongo_getListWithID(req, res);
};

//updating mongoDB list item
export const updateList= (req, res) => {
    mongo_methods.mongo_updateList(req, res);
};

//Deleting mongoDB list item
export const deleteList = (req, res) => {
    mongo_methods.mongo_deleteList(req, res);
};
