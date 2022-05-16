import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRouting } from './home.routing';
import { InitComponent } from './init/init.component';
import { HeaderComponent } from './init/header/header.component';
import { BodyComponent } from './init/body/body.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';


@NgModule({
  declarations: [
    InitComponent,
    HeaderComponent,
    BodyComponent,
  ],
  imports: [
    CommonModule,
    HomeRouting,
    IvyCarouselModule
  ],
  providers: [],
})
export class HomeModule { }
