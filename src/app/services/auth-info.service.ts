import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";
import { IDecodedToken } from '../interfaces/decoded-token-interface';

@Injectable({
  providedIn: 'root',
})
export class AuthInfoService {
  constructor() {}

  public setAuth(token: string) {
    localStorage.setItem('Authorization', token);
  }

  public getAuth(): string | null {
    return localStorage.getItem('Authorization');
  }

  public getDecodedToken() {
    const token = this.getAuth();
    const decoded = jwt_decode(token!) as IDecodedToken;
    return decoded;
  }

  public isAuthenticated(): boolean {
    if (!this.getAuth()) {
      return false;
    }
    return true;
  }
}
