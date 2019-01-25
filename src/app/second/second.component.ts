import { Component, OnInit } from '@angular/core';
import { NumbersService } from '../numbers.service';
import { Item } from '../item';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
required_no: Item;
details: Item[];
id: number;
  constructor(private service: NumbersService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
     this.details=this.service.GetData()

    this.route.params.subscribe(params =>
      {
        this.id = params['id'];
        for(let data of this.details)
        {
          if(data.id == this.id)
          {
            this.required_no = data;
          }
        }
      });

}
}
