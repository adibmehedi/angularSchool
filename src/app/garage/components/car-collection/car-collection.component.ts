import { Component, OnInit,Input, Output } from '@angular/core';
import {Car} from '../../../car/models/car';

@Component({
  selector: 'app-car-collection',
  templateUrl: './car-collection.component.html',
  styleUrls: ['./car-collection.component.css']
})
export class CarCollectionComponent implements OnInit {

  @Input() carCollection: Car[];

  constructor() { }

  ngOnInit() {
  }

}
