import { Component, OnInit } from '@angular/core';
import {Car} from '../../../car/models/car';
import {CarDataService} from '../../../car/services/car-data.service';

@Component({
  selector: 'app-garage-root',
  templateUrl: './garage-root.component.html',
  styleUrls: ['./garage-root.component.css']
})
export class GarageRootComponent implements OnInit {

  carCollection:Car[];
  constructor(public carDataService:CarDataService) { }

  ngOnInit() {
    this.getCarData();
  }

  getCarData(){
    //this.carDataService.getCars().subscribe(carCollection=>this.carCollection=carCollection);
    this.carCollection=this.carDataService.gerCars();
  }

}
