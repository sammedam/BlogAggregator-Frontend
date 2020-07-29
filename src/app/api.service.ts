import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getArticles() {
    return this.httpClient.get('https://localhost:44349/api/Posts');
  }
  public getComments() {
    return this.httpClient.get('https://localhost:44349/api/Comments');
  }
  public getAuthors() {
    return this.httpClient.get('https://localhost:44349/api/Authors');
  }
}
