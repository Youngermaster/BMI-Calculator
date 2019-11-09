import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  getBeer() {
    return this.httpClient.get('https://api.openbrewerydb.org/breweries');
  }
}
