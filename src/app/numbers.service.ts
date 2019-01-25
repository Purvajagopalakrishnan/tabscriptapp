import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {


  constructor() { }

 ITEMS: Item[]=[
    {
      id :1,
      color: "blue"
    },
    {
      id:2,
      color: "red"
    },
    {
      id:3,
      color: "green"
    },
    {
      id:4,
      color: "yellow"
    }

  ]

  GetData() {
   return this.ITEMS;
  }
  
}


