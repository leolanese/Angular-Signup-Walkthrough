import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, catchError, map, Observable, tap} from 'rxjs';
import { Onboard } from '../../assets/onBoardModule';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/onboard';
  private onboard = new BehaviorSubject<Onboard[] | undefined>(undefined);
  public onboard$: Observable<Onboard[]> = this.onboard.asObservable();

  private dataView = new BehaviorSubject<any>('/');
  public currentData$ = this.dataView.asObservable();

  constructor(private http: HttpClient) {}

  // Router directions core
  childPreviousStep: string = 'step0';
  childNextStep: string = 'step1';

  // push data
  updateData(dataView: any){
    this.dataView.next(dataView);
    console.log('updateData: ', dataView)
  }

  getAllValuesService(): void {
    this.http.get<any[]>(this.apiUrl)
      .pipe(
        tap(heroes => console.log(`getAllValuesService trigger`)),
      )
      .subscribe((response) => {
        this.onboard.next(response);
      });
  }

  getFirstPageValuesService(): void {
    this.http.get<any[]>(this.apiUrl)
      .pipe(
        tap(heroes => console.log(`getFirstPageValuesService trigger`)),
      )
      .subscribe((response) => {
        const mapping = response.filter(x => x.id === 0).map(x => x.subtitle);
        console.log(mapping);
        this.onboard.next(mapping);
      });
  }
}
