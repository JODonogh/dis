import mongoose from "mongoose";
import { ListSchema } from '../models/model.js';
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

const List = mongoose.model('List', ListSchema);

//controllers to interact with the data layer
// we could change the methods to call SQL for instance
//This puts the list into the database before the use of GET
export const mongo_methods = {

    mongo_addList: (req, res) => {
        performance.mark("MongoDB-save-start");
        console.log("there");
        let newList = new List(req.body);// What is sent via POST is in the body 

        newList.save()
            .then(()=>{
                res.json(newList);// transfering a state to change the state of the view
            })
            .catch(err=>{
                res.status(400).json(err);//otherwise send the error 
            });
            console.log("here");
    performance.mark("MongoDB-save-end");

    const M_Measure = performance.measure(
        "MongoDB-save-duration",
        "MongoDB-save-start",
        "MongoDB-save-end",
      );
      file_data("MongoDB" , "MongoDB-save", M_Measure.duration.toString())
    },

    //exporting GET 
     mongo_getList: (req, res) => {
        List.find()
            .then((list)=>{
                console.log('List:', list);
                res.json(list);
            })
            .catch(err=>{
                console.error('Error fetching list:', err);
                res.status(500).json({ error: 'Internal Server Error' });
            })
    },

    //Updating mongoDB list item by ID
     mongo_getListWithID: (req, res) => {
        List.findById({
            _id: req.params.listId
        })
            .then((list)=>{
                console.log('List:', list);
                res.json(list);
            })
            .catch(err=>{
                console.error('Error fetching list:', err);
                res.status(404).json({ error: 'Not Found' });
            })
    },

    //updating mongoDB list item
     mongo_updateList: (req, res) => {
        performance.mark("MongoDB-Update-start");
        List.findOneAndUpdate({_id:req.params.listId}, req.body, { new: true }//req.params.contactId is the id, req.body is the request and its body 
            // new: true means that the new updated list item is returned, not the old 
            ) 
            .then((list) =>{
                console.log('List:', list);
                res.json(list);
            })
            .catch((err) =>{
                console.error('Error udpating list:', err);
                res.status(404).json({ error: 'Not Found' });
            })   
            performance.mark("MongoDB-Update-end");

    const M_Measure = performance.measure(
        "MongoDB-Update-duration",
        "MongoDB-Update-start",
        "MongoDB-Update-end",
      );
      file_data("MongoDB" , "MongoDB-Update", M_Measure.duration.toString())  
    },

    //Deleting mongoDB list item
    mongo_deleteList: (req, res) => {
        performance.mark("MongoDB-Delete-start");
        List.deleteOne({_id:req.params.listId}) 
            .then(() =>{
                res.json({ message: 'succesfully deleted list '});
            })
            .catch((err) =>{
                console.error('Error deleting list:', err);
                res.status(404).json({ error: 'Not Found' });
            })     
            performance.mark("MongoDB-Delete-end");

    const M_Measure = performance.measure(
        "MongoDB-Delete-duration",
        "MongoDB-Delete-start",
        "MongoDB-Delete-end",
      );
      file_data("MongoDB" , "MongoDB-Delete", M_Measure.duration.toString())  
    }
};