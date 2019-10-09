import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface Chat {
  chat: string;
}

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  
  chatMessages: Chat[] = [{chat: "Hello"}, {chat: "Hi"}, {chat: "Hello"},];
  message : string = null;

  constructor() { }

  ngOnInit() {
  }

  addMessages(){
    const text : Chat = {
      chat: this.message
    }
    this.chatMessages.push(text);
    this.message = null;
  }

}
