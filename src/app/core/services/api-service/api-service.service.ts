import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  headers: HttpHeaders;
  params: HttpParams;
  constructor(protected http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-type': 'application/json'});
    this.params = new HttpParams();
  }

  get(url: string = `${environment.baseAPIUrl}`) {
    this.params = this.params.set('limit', environment.pageLimit);
    return this.http.get(url, { headers: this.headers, params: this.params });
  }
}
