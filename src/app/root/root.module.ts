import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootDefaultComponent } from '../root/components/root-default/root-default.component';

@NgModule({
    declarations: [
        RootDefaultComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [RootDefaultComponent]
})
export class RootModule {
}
