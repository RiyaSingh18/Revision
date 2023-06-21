import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { todos } from '../model/todos';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public url = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) {}

  getTodos(): Observable<todos[]> {
    return this.http.get<todos[]>(this.url);
  }
}
