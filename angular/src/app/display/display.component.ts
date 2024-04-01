import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent implements OnInit {

  itemService: ItemService; 
  router: Router;

  //angular copies one version of the Itemservice, not multiple copies
  constructor(itemService: ItemService, router: Router) {
      console.log(itemService)
      this.itemService = itemService
      this.router = router
  }
  ngOnInit(): void {
    this.itemService.getItems();
  }

  selectItems(item){
    this.itemService.selectedItem = item
    this.router.navigate(["/edit"]);
  }

}
