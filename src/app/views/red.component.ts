import { Component } from '@angular/core';
import { ApiService } from "../api-requests/api.service";

@Component({
  selector: 'red-component',
  template: `
    <small>{{ pageNumber$ | async}}</small>
  `,
  styles: [`
    :host {
      display: block;
      height: 30px;
      width: 30px;
      background-color: red;
    }
  `]
})
export class RedComponent {
  pageNumber$ = this.service.pageNumber$;

  constructor(private service: ApiService) {}
}
