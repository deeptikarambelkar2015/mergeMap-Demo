import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post, User,PostsResponse,UsersResponse } from './models';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsUrl = 'https://dummyjson.com/posts';
  private usersUrl = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<PostsResponse> {
    return this.http.get<PostsResponse>(this.postsUrl);
  }

  getUsers(): Observable<UsersResponse> {
    return this.http.get<UsersResponse>(this.usersUrl);
  }
}