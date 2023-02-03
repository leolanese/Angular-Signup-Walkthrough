import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from './api-requests/api.service';
import { Observable } from 'rxjs';
import { Onboarding } from '../assets/onBoardModule';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';

import { filter, map } from 'rxjs/operators';

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

  public appstate$: Observable<{ [k: string]: any; }>;
  public onBoardingHome$: Observable<Onboarding[]> = this.service.onBoardingHome$;

  ngOnInit() {
    this.getAllValues();

    // state from footer
    this.appstate$ = this.router.events.pipe(
      filter(e => e instanceof NavigationStart),
      map(() => {
        const currentState = this.router.getCurrentNavigation();
        console.log(currentState?.extras?.state);
        return currentState.extras.state;
      })
    );

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

    // Activate todos end-point and display on console
    this.service.getTodos().subscribe((t) => console.log('Todos:', t));
    this.service.getUsers().subscribe((u) => console.log('Users:', u));
    this.service.getPosts().subscribe((p) => console.log('Posts:', p));
  }

  getAllValues(): void {
    // just triggering what we need
    this.service.getInitialValuesService()
  }

  notify(note: Notification): void {
    console.log(`${AppComponent.name} handling/routing`, { note });
  }

}
