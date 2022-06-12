import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatacommunicationService {

  constructor(private httpclient: HttpClient) { }
  readData() {
    let url = environment.apiDoamin + 'api/users?page=2';
    return this.httpclient.get(url);
  }
}
