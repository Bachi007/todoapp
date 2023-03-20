import { Component } from '@angular/core';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-displayusers',
  templateUrl: './displayusers.component.html',
  styleUrls: ['./displayusers.component.css']
})
export class DisplayusersComponent {

  users:any=[];
  constructor(private service:TodoService){

  }

  ngOnInit(){
    this.service.getUsers().subscribe((res)=>{
      this.users=res;
    })
  }

}
