import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { RootDefaultComponent } from '../root/components/root-default/root-default.component';
import { GarageModule } from '../garage/garage.module';

@NgModule({
    declarations: [
        RootDefaultComponent
    ],
    imports: [
        BrowserModule,
        GarageModule
    ],
    providers: [],
    bootstrap: [RootDefaultComponent]
})
export class RootModule {
}
