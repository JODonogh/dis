import { mongo_methods } from './controllers_MongoDB.js'
//controllers to interact with the data layer
// we could change the methods to call SQL for instance
//This puts the list into the database before the use of GET
import fs from "fs";

function appendFile(data){
    fs.appendFile("H:/dis_test/performance.txt", data, err => {
        if (err) {
        console.error(err);
        };
    });
  };
  
  //DRY
  function file_data(framework, crud, number){
    let data = "\r\n" + framework + "," + crud + "," + number
        appendFile(data);
  }



export const addList = (req, res) => {
    performance.mark("Post-route-start");
    mongo_methods.mongo_addList(req, res);
    performance.mark("Post-route-end");

    const N_Measure = performance.measure(
            "Post-route-duration",
            "Post-route-start",
            "Post-route-end",
          );
          file_data("NodeJS" , "Post-route", N_Measure.duration.toString())
    
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
    performance.mark("Put-route-start");
    mongo_methods.mongo_updateList(req, res);
    performance.mark("Put-route-end");

    const N_Measure = performance.measure(
        "Put-route-duration",
        "Put-route-start",
        "Put-route-end",
      );
      file_data("NodeJS" , "Put-route", N_Measure.duration.toString())
};

//Deleting mongoDB list item
export const deleteList = (req, res) => {
    performance.mark("Delete-route-start");
    mongo_methods.mongo_deleteList(req, res);
    performance.mark("Delete-route-end");

    const N_Measure = performance.measure(
        "Delete-route-duration",
        "Delete-route-start",
        "Delete-route-end",
      );
      file_data("NodeJS" , "Delete-route", N_Measure.duration.toString())
};
