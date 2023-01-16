import { Component } from '@angular/core';
import { ApiService } from "../api-requests/api.service";
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  pageNumber$ = this.service.pageNumber$;

  constructor(private service: ApiService, private location: Location, private router: Router) {}

  onGoBackward() {
    // this.router.navigate([this.service.previousStep], {})
    this.location.back();
  }

  onPageUp(val: Object) {
    this.service.pageUp(val);
  }

  onPageDown(val: Object) {
    this.service.pageDown(val);
  }
}
