import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from './api-requests/api.service';
import { Observable } from 'rxjs';
import { Onboard } from '../assets/onBoardModule';
import { ActivatedRoute, NavigationStart, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // P
  constructor(private service: ApiService, public router: Router, public route: ActivatedRoute) {}

  title = 'ADSS';
  items: any;
  itemsQuantity: number;
  routerLinkDestination = 'step';

  public onboard$: Observable<Onboard[]> = this.service.onboard$;

  ngOnInit() {
    this.getAllValues();
    this.routerLinkDestination = this.routerLinkDestination +1;

    this.items = [
      { name: '1', img: 'https://via.placeholder.com/200x200' },
      { name: '2', img: 'https://via.placeholder.com/200x200' },
      { name: '3', img: 'https://via.placeholder.com/200x200' },
      { name: '4', img: 'https://via.placeholder.com/200x200' },
      { name: '5', img: 'https://via.placeholder.com/200x200' },
      { name: '6', img: 'https://via.placeholder.com/200x200' },
      { name: '7', img: 'https://via.placeholder.com/200x200' },
      { name: '8', img: 'https://via.placeholder.com/200x200' },
      { name: '9', img: 'https://via.placeholder.com/200x200' },
    ];
    this.itemsQuantity = this.items.length;
    console.log(this.itemsQuantity)
  }

  // goTo() {
  //   let objToSend: NavigationExtras = {
  //     queryParams: {
  //       steps: 2,
  //     },
  //   };
  //
  //   this.router.navigate(['/steps2'], {
  //     state: { steps2: objToSend }
  //   });
  // }

  getAllValues(): void {
    // just triggering what we need
    this.service.getFirstPageValuesService()
  }

  notify(note: Notification): void {
    console.log(`${AppComponent.name} handling/routing`, { note });

  }

}
