import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms'
import { GarageRootComponent } from './components/garage-root/garage-root.component';
import {CreateCarComponent} from '../car/components/create-car/create-car.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    GarageRootComponent
  ],
  declarations: [GarageRootComponent, CreateCarComponent]
})
export class GarageModule { }
