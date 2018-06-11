import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Http } from '@angular/http';

@Injectable()
export class AuthService extends DataService {

  constructor(http: Http) {
    super('/auth/?format=json', http);
   }

}
