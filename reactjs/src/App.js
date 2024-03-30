import { useEffect, useState } from "react";
import {Route, Routes, Link} from "react-router-dom";
import Display from "./Display"
import Form from "./Form"

function App(props) {

  const API = "http://localhost:3000/lists";

  //Creating state variables and methods to add list items, setting default as empty list 
  const [items, setItems] = useState([]);

  //State for input field, storing what the user inputs, setting default as empty string
  const [input, setInput]= useState("");
  const [itemToEdit, setitemEdit] = useState({})

    //Get List function
  const GetList = async () =>{//asychronous function 
      const resp = await fetch(API)//fetching from the API
      const data = await resp.json();//taking the response and converting it to JSON
      setItems(data)//storing the list items as state items for use in the component
    }
  
  const addItem = async(newItem)=>{
    await fetch(API,{//asynchronous fetching of 
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(newItem)
    })
    await GetList()
    setInput('')
  }

  const deleteItem = async(todeleteItem) => {
    try{
        const res = await fetch(API + "/" + todeleteItem._id, {
            method: "DELETE",
        });
        if(!res.ok){
            throw new Error("Sorry, the task has failed to be deleted")
        }
        const data = await res.json()
        //update list
        await GetList()
    } catch (error){
        console.error("Error updating the list", error)
    }
}

  const editItem = async(editedItem) => {
      try{
           await fetch(API + "/" + `${editedItem._id}`, {
              method: "PUT",
              headers: {
                "Content-Type":"application/json"
              },
              body: JSON.stringify(editedItem)
          });
          
      } catch (error){
          console.error("Error updating the list", error)
      }
      await GetList()
      console.log(editedItem)
  }

  //using hook useEffect to load in list items when the component renders
  useEffect(()=>{
    GetList();
  }, []);//making sure it only loads once and stops


  return (
    //container to hold all the DOM elements
    //
    <div className="container">
      <div className="heading">
        <h1>Wishlist Items</h1>
        <Link to="/new"><button>Create a new list Item</button></Link> 
        <Routes>
          <Route path="/" element={ <Display items={items} editthisItem={setitemEdit} history={props.history} deleteItem={deleteItem}/> } />
          <Route exact path="/new" element={ <Form submitFunc={addItem} history={props.history} label="create"/> } />
          <Route exact path="/edit" element={ <Form submitFunc={editItem} history={props.history} label="update" initialState={itemToEdit} /> } />    
        </Routes>
    </div>
    </div>
  );
}

export default App;
