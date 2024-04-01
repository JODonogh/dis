import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
// Contains the information about a route associated with a component loaded in an outlet. An ActivatedRoute can also be used to traverse the router state tree.
import { ItemService } from '../item.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  route: ActivatedRoute;
  action: any;
  router: Router;
  itemService: ItemService;
  id: any;
  Title: String = "";
  Status: Boolean = false; 

  constructor(route: ActivatedRoute, router: Router, itemService: ItemService) {
    this.route = route;
    this.router = router
    this.action = this.router.url
    this.itemService= itemService;

    if (this.action === "/edit"){
      this.Title = this.itemService.selectedItem.Title
      this.Status = this.itemService.selectedItem.Status
      this.id = this.itemService.selectedItem._id
    }
  }

  handleSubmit(){

    const items: any= {Title: this.Title, Status: this.Status}

    if (this.action === "/create"){
      this.itemService.createItem(items)
      this.Title= ""
      this.Status = false
      this.router.navigate(["/"]);
    }

    if (this.action === "/edit"){
      console.log(items, "if")
      items._id = this.id
      this.itemService.updateItem(items)
      this.Title= ""
      this.Status = false
      this.router.navigate(["/"]);
    }
  }

  ngOnInit(): void{}
}
