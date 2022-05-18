import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRouting } from './home.routing';
import { InitComponent } from './init/init.component';
import { HeaderComponent } from './init/header/header.component';
import { BodyComponent } from './init/body/body.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    InitComponent,
    HeaderComponent,
    BodyComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HomeRouting,
    IvyCarouselModule,
    HttpClientModule,
  ],
  providers: [
    HttpClient,
  ],
})
export class HomeModule { }
