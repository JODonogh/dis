import { useEffect, useState } from "react";
import ListItem from "./ListItem";

const API = "http://localhost:3000/lists";

function App() {

  //Creating state variables and methods to add list items, setting default as empty list 
  const [items, setItems] = useState([]);

  //State for input field, storing what the user inputs, setting default as empty string
  const [input, setInput]= useState("");
  const [status, setStatus]= useState("");

  const addItem = async()=>{
    const data = await fetch(API,{
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          Title: input,
          Status: status
        })
    }).then(res => res.json())
    await GetList()
    setInput('')
  }

  //using hook useEffect to load in list items when the component renders
  useEffect(()=>{
    GetList();
  }, []);//making sure it only loads once and stops

  //taking in input from user and using setInput method to store it as an input state variable
  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
  }

  //Get List function
  const GetList = () =>{
    fetch(API)//fetching from the API
    .then(res => res.json())//taking the response and converting it to JSON
    .then(data => setItems(data))//storing the list items as state items for use in the component
    .catch(err => console.log(err))//catching errors for debugging
    
  }

  return (
    //container to hold all the DOM elements
    //
    <div className="container">
      <div className="heading">
        <h1>List Items</h1>
      </div>

    <div className="form">
      <h5>Title</h5>
      <input type="text" value={input} onChange={handleChange}/>
      <h5>Status</h5>
      <input type="text" value={status} onChange={handleChangeStatus}/>
      <button onClick={()=>addItem()}>
        <span>Add</span>
      </button>
    </div>

    <div className="List">
      {items.map((item)=>{
        const {_id, Title} = item
        return <ListItem title={Title} id={_id} setItems={setItems} getlist={GetList}/>
      })}
    </div>

    </div>
  );
}

export default App;
