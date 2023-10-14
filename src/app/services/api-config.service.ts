import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiConfigService {
  private apiKey = '3c73e3752dce0b1dff8fefd7d9965d3e';
  private apiHost = 'v3.football.api-sports.io';
  private apiUrl = 'https://v3.football.0api-sports.io/';
  private season = '2023';

  getApiKey(): string {
    return this.apiKey;
  }

  getApiHost(): string {
    return this.apiHost;
  }

  getApiUrl(): string {
    return this.apiUrl;
  }

  getSeason(): string {
    return this.season;
  }
}
