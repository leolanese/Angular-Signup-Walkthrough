import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, first, Observable, ReplaySubject, tap} from 'rxjs';
import { Onboarding } from '../../assets/onBoardModule';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/onboard';

  private onBoardingHome = new ReplaySubject<Onboarding[] | undefined>(undefined);
  public onBoardingHome$: Observable<Onboarding[]> = this.onBoardingHome.asObservable();

  private onBoardSignup = new ReplaySubject<Onboarding[] | undefined>(undefined);
  public onBoardSignup$: Observable<Onboarding[]> = this.onBoardSignup.asObservable();

  private onBoardLogin = new ReplaySubject<Onboarding[] | undefined>(undefined);
  public onBoardLogin$: Observable<Onboarding[]> = this.onBoardLogin.asObservable();

  public pageNumber$ = new BehaviorSubject<any>(0);

  pageUp = (val: Object) => this.pageNumber$.next(val);

  pageDown = (val: Object) => this.pageNumber$.next(val);

  constructor(private http: HttpClient) {}

  getAllValuesService(): void {
    this.http.get<any[]>(this.apiUrl)
      .pipe(
        first(),
        tap(heroes => console.log(`getAllValuesService trigger`)),
      )
      .subscribe((response) => {
        this.onBoardingHome.next(response);
      });
  }

  getInitialValuesService(): void {
    this.http.get<any[]>(this.apiUrl)
      .pipe(
        first(),
        tap(heroes => console.log(`getInitialValuesService trigger`)),
      )
      .subscribe((response) => {
        const home = response.filter(x => x.id === 'home');
        this.onBoardingHome.next(home);

        const signup = response.filter(x => x.id === 'signup');
        this.onBoardSignup.next(signup);

        const login = response.filter(x => x.id === 'login');
        this.onBoardLogin.next(login);
      });
  }
}
