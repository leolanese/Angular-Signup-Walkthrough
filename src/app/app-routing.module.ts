import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Step1ViewComponent } from "./views/step1/step1.component";
import { CommonModule } from "@angular/common";

import { BlueComponent } from '../app/components/blue.component';
import { RedComponent } from '../app/components/red.component';
import { SignUp } from '../app/components/yellow.component';

const routes: Routes = [
  { path: '', component: BlueComponent },

  { path: 'back', component: RedComponent, outlet: 'step1' },
  { path: 'back', component: RedComponent, outlet: 'step2' },
  { path: 'back', component: RedComponent, outlet: 'step3' },
  { path: 'back', component: RedComponent, outlet: 'step4' },

  { path: 'forward', component: BlueComponent, outlet: 'step1' },
  { path: 'forward', component: BlueComponent, outlet: 'step2' },
  { path: 'forward', component: BlueComponent, outlet: 'step3' },
  { path: 'forward', component: BlueComponent, outlet: 'step4' },

  { path: 'udpate', component: SignUp, outlet: 'step1' },
  { path: 'udpate', component: SignUp, outlet: 'step2' },
  { path: 'udpate', component: SignUp, outlet: 'step3' },
  { path: 'udpate', component: SignUp, outlet: 'step4' },

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
