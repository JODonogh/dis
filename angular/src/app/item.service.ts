import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url = "http://localhost:3000/lists"
  items: any =[];
  selectedItem: any;

  async getItems(){
    const response = await fetch(this.url);
    const data = await response.json();
    this.items = data;
  }

  // do this when the component loads

  async createItem(newItem){
    await fetch(this.url, {
      method: "post",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newItem)
    })
    console.log(newItem)
    this.getItems()
  }

  async updateItem(updateItem){
    console.log({updateItem})
    await fetch(this.url+`/${updateItem._id}`, {
      method: "PUT",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(updateItem)
    })
    console.log(updateItem)
    this.getItems()
  }

  async deleteItem(deleteItem){
    await fetch(this.url+`/${deleteItem._id}`, {
      method: "delete",
    })
    this.getItems()
  }
}
