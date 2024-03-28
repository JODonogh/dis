import React, {useState} from "react";

const API = "http://localhost:3000/lists";

function ListItem(props){
    //Props parameter

    const {title, id, setItems} = props;
    console.log(props)
    const deleteItem = async(id) => {
        try{
            const res = await fetch(API + "/" + id, {
                method: "DELETE",
            });
            if(!res.ok){
                throw new Error("Sorry, the task has failed to be deleted")
            }
            const data = await res.json()
            
            setItems(items=> items.filter(item=> item._id !== data._id));
        } catch (error){
            console.error("Error updating the list", error)
        }
    }
    const editItem = async(id) => {
        try{
            const res = await fetch(API + "/" + id, {
                method: "PUT",
            });
            if(!res.ok){
                throw new Error("Sorry, the task has failed to be updated")
            }
            const data = await res.json()
            console.log(typeof props.setItems)
            props.setItems(items=> items)
        } catch (error){
            console.error("Error updating the list", error)
        }
    }
        return(
            <div className="todo">
                <div key={id} className="text">{title}</div>
                <div className="delete-list" onClick={()=>deleteItem(id)}><span>X</span></div>
                <div className="edit-list" onClick={()=>editItem(id)}><span>....</span></div>
            </div>
        )
}

export default ListItem;