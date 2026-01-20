import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
}

export interface Post {
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUser(): Observable<User> {
    return this.http.get<User>(
      'https://jsonplaceholder.typicode.com/users/1'
    );
  }

  getPostsByUser(userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts?userId=${userId}'
    );
  }
}


