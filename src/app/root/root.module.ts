import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootDefaultComponent } from '../root/components/root-default/root-default.component';
import { CarComponent } from '../root/components/car/car.component';
import { GarageComponent } from '../root/components/garage/garage.component';

@NgModule({
    declarations: [
        RootDefaultComponent,
        CarComponent,
        GarageComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [RootDefaultComponent, CarComponent, GarageComponent]
})
export class RootModule {
}
