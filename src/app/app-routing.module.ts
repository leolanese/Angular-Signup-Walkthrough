import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from "@angular/common";

import { FooterDisclaimerComponent } from "./footer-disclaimer/footer-disclaimer.component";
import { BlueComponent } from './views/blue.component';
import { RedComponent } from './views/red.component';
import { YellowComponent } from './views/yellow.component';
import { LoginBodyComponent } from "./login-body/login-body.component";
import {HeaderComponent} from "./header/header.component";

const routes: Routes = [
  { path: '', component: BlueComponent },

  { path: 'signup', component: HeaderComponent, outlet: 'outlet1' },
  { path: 'signup', component: YellowComponent, outlet: 'outlet2' },
  { path: 'signup', component: LoginBodyComponent, outlet: 'outlet3' },
  { path: 'signup', component: YellowComponent, outlet: 'outlet4' },
  { path: 'signup', component: FooterDisclaimerComponent, outlet: 'outlet5' },

  { path: 'login', component: HeaderComponent, outlet: 'outlet1' },
  { path: 'login', component: BlueComponent, outlet: 'outlet2' },
  { path: 'login', component: LoginBodyComponent, outlet: 'outlet3' },
  { path: 'login', component: BlueComponent, outlet: 'outlet4' },
  { path: 'login', component: FooterDisclaimerComponent, outlet: 'outlet5' },

  { path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
