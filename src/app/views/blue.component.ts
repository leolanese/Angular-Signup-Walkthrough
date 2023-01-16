import { Component } from '@angular/core';
import { ApiService } from "../api-requests/api.service";

@Component({
  selector: 'blue-component',
  template: `
    <small>{{ pageNumber$ | async}}</small>
  `,
  styles: [`
    :host {
      display: block;
      height: 30px;
      width: 30px;
      background-color: blue;
    }
  `]
})
export class BlueComponent {
  pageNumber$ = this.service.pageNumber$;

  constructor(private service: ApiService) {}
}
