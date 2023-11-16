import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from '../home/home.component';
import { routing } from '../app-routing.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,routing
  ]
})
export class LandingModule { }
