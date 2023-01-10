import { Component, Input, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { Router } from '@angular/router';
import { ApiService } from './../api-requests/api.service';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  {

  constructor(private location: Location, private router: Router, private service: ApiService) {
  }

  goForward() {
    this.router.navigate([this.service.childNextStep])
    this.service.updateData('/step' + 1)
  }

  goBackward() {
    // this.router.navigate([this.service.previousStep], {})
    this.location.back();
  }
}
