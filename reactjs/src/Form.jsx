import React from "react"
import {useState} from "react"
import { useNavigate } from 'react-router-dom';

const Form = (props) => {
    const his = useNavigate();
    const {
      initialState = { Title: "", Status: false },
      submitFunc = () => {},
      label = "submit",
      history
    } = props;
  
    // The Form State
    const [formState, setFormState] = useState(initialState);
  
    // The Handle Change Function
    const handleChange = (event) => {
      console.log(event.target.value)
      const newState = {...formState}
        if(event.target.type === "checkbox"){
          newState[event.target.name] = event.target.checked
        } else {
          newState[event.target.name] = event.target.value
        }
        setFormState(newState)
    }
  
    // The Handle Submit Function
    const handleSubmit = (event) => {
      event.preventDefault()
      submitFunc(formState)
      his('/');
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" name="Title" value={formState.Title} onChange={handleChange} />
        <input type="checkbox" name="Status" checked={formState.Status} onChange={handleChange}/>
        <input type="submit" value={label} />
      </form>
    );
  };

export default Form;