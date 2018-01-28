import { Component, OnInit } from '@angular/core';
import {Car} from '../../models/car';
import {CarDataService} from '../../services/car-data.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  model:Car=new Car('Toyota','A Random Text');

  constructor(public carDataService:CarDataService) {
    
  }

  save(car:Car):void{
    this.carDataService.addCar(car);
  }

  ngOnInit() {
  }

}
