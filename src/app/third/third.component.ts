import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
@Input() object: Item;

  constructor(private router: Router) {}

  ngOnInit() {}
    onclick(){
    this.router.navigate([`second/${this.object.id}`]);
  }

}
