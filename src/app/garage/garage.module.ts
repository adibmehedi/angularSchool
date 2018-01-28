import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms'
import { GarageRootComponent } from './components/garage-root/garage-root.component';
import {CreateCarComponent} from '../car/components/create-car/create-car.component';
import { CarCollectionComponent } from './components/car-collection/car-collection.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    GarageRootComponent
  ],
  declarations: [GarageRootComponent, CreateCarComponent, CarCollectionComponent]
})
export class GarageModule { }
