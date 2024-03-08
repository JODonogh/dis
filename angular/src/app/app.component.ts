import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoapp';
  readonly APIUrl = "http://localhost:3000/list"

  constructor(private http:HttpClient){
  }
  notes:any=[];

  refreshNotes(){
    this.http.get(this.APIUrl+'GetNotes').subscribe(data=>{
      this.notes=data;
    })
  }

  ngOnInit(){
    this.refreshNotes();
  }
}
