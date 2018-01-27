import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { CreateCarComponent } from './components/create-car/create-car.component';
import { CarRootComponent } from './components/car-root/car-root.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    CreateCarComponent,
    CarRootComponent
  ],
  declarations: [CarRootComponent,CreateCarComponent]
})
export class CarModule { }
