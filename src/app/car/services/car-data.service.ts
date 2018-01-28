import { Injectable } from '@angular/core';
import {Car} from '../models/car';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CarDataService {

  carCollection:Car[] = [
    new Car("BMW","Demo description"),
    new Car("Honda","Other description")
  ];

  constructor() {

  }

  addCar(car:Car){
    this.carCollection.push(car);
    console.log("Car Added",car);
    //console.log("Car Collection",this.getCars());
  }

  // getCars():Observable<Car[]>{
  //   return of(this.carCollection);
  // }
  gerCars(){
    console.log("GetCar",this.carCollection);
    return this.carCollection;
  }

}
