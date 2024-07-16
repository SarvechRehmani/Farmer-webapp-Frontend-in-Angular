import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:4200/assets/users.json';

  authenticate(username: string, password: string): Observable<any> {
    return this.http.get<any[]>(this.baseUrl).pipe(
      map((users) => {
        const foundUser = users.filter(
          (user) => user.username === username && user.password === password
        );
        return foundUser;
      }),
      catchError(() => {
        // Handle error if JSON file cannot be fetched
        return of(false);
      })
    );
  }

  setUserToLocalStorage(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }
}
