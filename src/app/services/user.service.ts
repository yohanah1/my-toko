import { AuthInfoService } from './auth-info.service';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IResponse } from '../interfaces/response-interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private authInfoService: AuthInfoService
  ) {}

  public getUserList(): Observable<HttpResponse<IResponse>> {
    return this.http
      .get<IResponse>(
        `${environment.API_URL}users/list?userID=${
          this.authInfoService.getDecodedToken().id
        }`,
        {
          headers: new HttpHeaders({
            Authorization: this.authInfoService.getAuth()!,
          }),
          responseType: 'json',
          observe: 'response',
        }
      )
      .pipe(catchError(this.handlingError));
  }

  public createUser(user: {
    name: string;
    email: string;
    password: string;
    role: string;
  }): Observable<HttpResponse<IResponse>> {
    return this.http
      .post<IResponse>(
        `${environment.API_URL}users/create?userID=${
          this.authInfoService.getDecodedToken().id
        }`,
        user,
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: this.authInfoService.getAuth()!,
          }),
          observe: 'response',
        }
      )
      .pipe(catchError(this.handlingError));
  }

  private handlingError(err: HttpErrorResponse) {
    return throwError(err);
  }
}
