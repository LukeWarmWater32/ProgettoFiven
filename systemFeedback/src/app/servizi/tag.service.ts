import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from '../model/tag';
@Injectable({
  providedIn: 'root'
})
export class TagService {
  uri: string = 'http://localhost:8080'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
    }), 
  };

  constructor(private http:HttpClient) { }
  addTag(tag: Tag): Observable<string> {
    return this.http.post<string>(`${this.uri}/upsertTag`, tag); 
  }
  getTags(page:number): Observable <Tag[]> {
    return this.http.get<Tag[]>(`${this.uri}/getTag/${page}`)
  }
   updateTag(tag:Tag):Observable<string>{
    return this.http.post<string>(`${this.uri}/upsertTag`, tag)
  }
  deleteTag(id:number):Observable<string>{
    return this.http.get<string>(`${this.uri}/deleteTag/${id}`)
  }
  getTagsDim():Observable<number>{
    return this.http.get<number>(`${this.uri}/getTagsDim`)
  }
}
