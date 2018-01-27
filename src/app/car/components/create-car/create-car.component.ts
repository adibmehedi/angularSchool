import { Component, OnInit } from '@angular/core';
import {Car} from '../../models/car';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  model=new Car('Toyota','A Random Text');


  constructor() { }

  ngOnInit() {
  }

}
