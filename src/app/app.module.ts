import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialExampleModule } from '../material.modules';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepsComponent } from './steps/steps.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { FileuploadComponent } from "./upload/upload.component";
import { FormsComponent } from "./forms/forms.component";
import { ElementsComponent } from "./elements/elements.component";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import { LogoComponent } from "./logo/logo.component";
import { HttpClientModule } from "@angular/common/http";
import { FooterComponent } from "./footer/footer.component";
import { FooterDisclaimerComponent } from "./footer-disclaimer/footer-disclaimer.component";

import { CarouselComponent } from '../app/carousel/carousel.component';
import { DuplicateDirective } from "./carousel/duplicate.directive";
import { LoginBodyComponent } from "./login-body/login-body.component";
import { SliderComponent } from "./slider/slider.component";
import { HeaderComponent } from "./header/header.component";

import {BlueComponent} from "./views/blue.component";
import {RedComponent} from "./views/red.component";
import {YellowComponent} from "./views/yellow.component";

@NgModule({
  declarations: [
    AppComponent,
    StepsComponent,
    FileuploadComponent,
    FormsComponent,
    ElementsComponent,
    CheckboxComponent,
    LogoComponent,
    FooterComponent,
    FooterDisclaimerComponent,
    LoginBodyComponent,
    CarouselComponent,
    DuplicateDirective,
    SliderComponent,
    HeaderComponent,

    BlueComponent,
    RedComponent,
    YellowComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ElementsComponent,
    StepsComponent,
    FooterComponent,
    FooterDisclaimerComponent,
    LoginBodyComponent,
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
