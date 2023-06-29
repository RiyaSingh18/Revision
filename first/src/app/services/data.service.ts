import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { todos } from '../model/todos';
import { posts } from '../model/posts';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public url = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<todos[]> {
    return this.http.get<todos[]>(this.url + '/todos');
  }
  getPosts(): Observable<posts[]> {
    return this.http.get<posts[]>(this.url + '/posts');
  }
}
