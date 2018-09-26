import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { LateralMenuComponent } from './lateral-menu/lateral-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LateralMenuComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule, 
    MatAutocompleteModule,
    MatIconModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
