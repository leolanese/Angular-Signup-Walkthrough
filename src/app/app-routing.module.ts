import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Step1ViewComponent } from "./views/step1/step1.component";
import { CommonModule } from "@angular/common";

import { BlueComponent } from './views/blue.component';
import { RedComponent } from './views/red.component';
import { YellowComponent } from './views/yellow.component';

const routes: Routes = [
  { path: '', component: BlueComponent },

  { path: 'login', component: BlueComponent, outlet: 'step1' },
  { path: 'login', component: BlueComponent, outlet: 'step2' },
  { path: 'login', component: BlueComponent, outlet: 'step3' },
  { path: 'login', component: BlueComponent, outlet: 'step4' },

  { path: 'signup', component: YellowComponent, outlet: 'step1' },
  { path: 'signup', component: YellowComponent, outlet: 'step2' },
  { path: 'signup', component: YellowComponent, outlet: 'step3' },
  { path: 'signup', component: YellowComponent, outlet: 'step4' },

  { path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    Step1ViewComponent,
  ],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule, Step1ViewComponent],
  providers: [],
})
export class AppRoutingModule { }
