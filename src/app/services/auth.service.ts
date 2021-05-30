import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { IResponse } from '../interfaces/response-interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public loginUser(user: {
    email: string;
    password: string;
  }): Observable<HttpResponse<IResponse>> {
    return this.http
      .post<IResponse>(`${environment.API_URL}auth/login`, user, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        observe: 'response',
      })
      .pipe(catchError(this.handlingError));
  }

  public resetRequestPasswordUser(user: {
    email: string;
  }): Observable<HttpResponse<IResponse>> {
    return this.http
      .post<IResponse>(
        `${environment.API_URL}auth/password/reset-request`,
        user,
        {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
          observe: 'response',
        }
      )
      .pipe(catchError(this.handlingError));
  }

  public resetPasswordUser(
    token: string,
    user: {
      password: string;
    }
  ): Observable<HttpResponse<IResponse>> {
    return this.http
      .post<IResponse>(
        `${environment.API_URL}auth/password/reset?token=${token}`,
        user,
        {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
          observe: 'response',
        }
      )
      .pipe(catchError(this.handlingError));
  }

  public logoutUser(): void {
    localStorage.removeItem('Authorization');
  }

  private handlingError(err: HttpErrorResponse) {
    return throwError(err);
  }
}
