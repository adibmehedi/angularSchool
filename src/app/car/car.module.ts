import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { CreateCarComponent } from './components/create-car/create-car.component';
import { CarRootComponent } from './components/car-root/car-root.component';
import {CarDataService} from './services/car-data.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CarDataService
  ],
  exports:[
    CreateCarComponent,
    CarRootComponent
  ],
  providers: [
    CarDataService
  ],
  declarations: [CarRootComponent,CreateCarComponent]
})
export class CarModule { }
