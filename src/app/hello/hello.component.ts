import { Component, OnInit } from '@angular/core';
import { NumbersService } from '../numbers.service';
import { Item } from '../item';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

details:Item[];
  constructor(private service:NumbersService) { }

  ngOnInit() {
    this.details = this.service.GetData();
  }

}
