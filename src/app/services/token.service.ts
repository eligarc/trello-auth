import { Injectable } from '@angular/core';
import { getCookie, removeCookie, setCookie } from 'typescript-cookie';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string) {
    // localStorage.setItem('token', token);
    setCookie('token-trello', token, { expires: 365, path: '/' });
  }

  getToken() {
    // return localStorage.getItem('token') || '';
    const token = getCookie('token-trello');
    return token;
  }

  removeToken() {
    // localStorage.removeItem('token');
    removeCookie('token-trello');
  }
}
