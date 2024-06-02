import React from "react"
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";

const Display = (props) => {
  const his = useNavigate();
    if (props.items) {
      return (
        <ul>
        <Link to="/new"><button id="create-button">Create a new list Item</button></Link> 
          {props.items.map((item) => (
            <li key={item._id}>
              {item.Title} - {item.Status ? "Saved" : "Not Saved"} - {" "}
              <button id={item.Title}
                onClick={(event) => {
                  props.editthisItem(item);
                  his('/edit')
                }}
              >
                Edit
              </button>
              <button id={"Delete "  + item.Title} onClick={() => props.deleteItem(item)}>Delete</button>
            </li>
          ))}
        </ul>
      );
    } else {
      return <h1>Still Loading or No Items</h1>;
    }
  };

export default Display