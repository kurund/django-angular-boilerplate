import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/delay';
import { AppError } from '../common/app.error';
import { NotFoundError } from '../common/not-found-error';
import { BadInputError } from '../common/bad-input-error';
import { PermissionDeniedError } from '../common/permission-denied-error';

@Injectable()
export class DataService {
  constructor(private url: string, private http: Http) { }

  getAll(filterParams?: any) {
    return this.http.get(this.url, {params: filterParams})
      .map(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInputError(error.json));
    }

    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }

    if (error.status === 403) {
      return Observable.throw(new PermissionDeniedError(error.json));
    }

    return Observable.throw(new AppError(error));
  }
}
