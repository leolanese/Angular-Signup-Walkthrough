import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, Observable, ReplaySubject, tap} from 'rxjs';
import { Onboarding } from '../../assets/onBoardModule';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/onboard';

  private onBoardSignup = new ReplaySubject<Onboarding[] | undefined>(undefined);
  public onBoardSignup$: Observable<Onboarding[]> = this.onBoardSignup.asObservable();

  private onBoardingHome = new ReplaySubject<Onboarding[] | undefined>(undefined);
  public onBoardingHome$: Observable<Onboarding[]> = this.onBoardingHome.asObservable();

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
        const home = response.filter(x => x.id === 'home').map(x => x.subtitle);
        this.onBoardingHome.next(home);

        const signup = response.filter(x => x.id === 'signup').map(x => x.subtitle);
        this.onBoardSignup.next(signup);
      });
  }
}
