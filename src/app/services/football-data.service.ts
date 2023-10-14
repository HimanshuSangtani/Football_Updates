import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiConfigService } from './api-config.service';

@Injectable({
  providedIn: 'root',
})
export class FootballDataService {
  constructor(
    private http: HttpClient,
    private apiConfig: ApiConfigService
  ) {}
  private dataSubject = new BehaviorSubject<any>(null);
  public data = this.dataSubject.asObservable();

  getStandings(leagueId: number): Observable<any> {
    const apiUrl = `${this.apiConfig.getApiUrl()}standings?league=${leagueId}&season=${this.apiConfig.getSeason()}`;
    const requestOptions = this.getApiRequestOptions();
    return this.http.get(apiUrl, requestOptions);
  }

  getFixtures(leagueId: number, teamId: number): Observable<any> {
    const apiUrl = `${this.apiConfig.getApiUrl()}fixtures?league=${leagueId}&season=${this.apiConfig.getSeason()}&team=${teamId}`;
    const requestOptions = this.getApiRequestOptions();
    return this.http.get(apiUrl, requestOptions);
  }

  dataShare(data: any) {
    this.dataSubject.next(data);
  }

  private getApiRequestOptions(): { headers: HttpHeaders } {
    const headers = new HttpHeaders()
      .set('x-rapidapi-key', this.apiConfig.getApiKey())
      .set('x-rapidapi-host', this.apiConfig.getApiHost());

    return { headers };
  }
}
