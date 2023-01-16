import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from "@angular/common";

import { FooterDisclaimerComponent } from "./footer-disclaimer/footer-disclaimer.component";
import { LoginBodyComponent } from "./login-body/login-body.component";
import { HeaderComponent } from "./header/header.component";

import { BlueComponent } from './views/blue.component';
import { RedComponent } from './views/red.component';
import { YellowComponent } from './views/yellow.component';

// /primaryRoute(routerOutletName:path)
// http://localhost:4200/(outlet1:login//outlet2:login//outlet3:login//outlet4:login//outlet5:login)
const routes: Routes = [
  { path: '', redirectTo: 'HOME', pathMatch: 'full' },

  { path: 'signup_1', component: HeaderComponent, outlet: 'outlet1'  , pathMatch: 'prefix'},
  { path: 'signup_1', component: YellowComponent, outlet: 'outlet2' , pathMatch: 'prefix' },
  { path: 'signup_1', component: LoginBodyComponent, outlet: 'outlet3'  , pathMatch: 'prefix'},
  { path: 'signup_1', component: YellowComponent, outlet: 'outlet4' , pathMatch: 'prefix' },
  { path: 'signup_1', component: FooterDisclaimerComponent, outlet: 'outlet5'  , pathMatch: 'prefix'},

  { path: 'signup_2', component: HeaderComponent, outlet: 'outlet1', pathMatch: 'prefix'},
  { path: 'signup_2', component: RedComponent, outlet: 'outlet2', pathMatch: 'prefix'},
  { path: 'signup_2', component: LoginBodyComponent, outlet: 'outlet3', pathMatch: 'prefix'},
  { path: 'signup_2', component: RedComponent, outlet: 'outlet4', pathMatch: 'prefix'},
  { path: 'signup_2', component: FooterDisclaimerComponent, outlet: 'outlet5', pathMatch: 'prefix'},

  { path: 'signup_3', component: BlueComponent, outlet: 'outlet1', pathMatch: 'prefix'},
  { path: 'signup_3', component: BlueComponent, outlet: 'outlet2', pathMatch: 'prefix'},
  { path: 'signup_3', component: BlueComponent, outlet: 'outlet3', pathMatch: 'prefix'},
  { path: 'signup_3', component: BlueComponent, outlet: 'outlet4', pathMatch: 'prefix'},
  { path: 'signup_3', component: BlueComponent, outlet: 'outlet5', pathMatch: 'prefix'},

  { path: 'login', component: HeaderComponent, outlet: 'outlet1', pathMatch: 'prefix'},
  { path: 'login', component: BlueComponent, outlet: 'outlet2' , pathMatch: 'prefix',},
  { path: 'login', component: LoginBodyComponent, outlet: 'outlet3', pathMatch: 'prefix'},
  { path: 'login', component: BlueComponent, outlet: 'outlet4' , pathMatch: 'prefix'},
  { path: 'login', component: FooterDisclaimerComponent, outlet: 'outlet5', pathMatch: 'prefix'},

  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
