import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLayoutComponent } from './layout/home/home-layout.component';

@NgModule({
  declarations: [
    HomeLayoutComponent,
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule
  ],
  exports:[
    HomeLayoutComponent,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
