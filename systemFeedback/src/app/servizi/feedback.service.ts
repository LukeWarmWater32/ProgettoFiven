import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from '../model/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  uri: string = 'http://localhost:8080'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
    }),
  };

  constructor(private http:HttpClient) { }
  addFeedback(feedback:Feedback): Observable <string>{
    return this.http.post<string>(`${this.uri}/upsertFeedback`, feedback)
  }
  getFeedbacks(id:number):Observable <Feedback>{
    return this.http.get<Feedback>(`${this.uri}/getFeedback/${id}`)
  }
  updateFeedback(feedback:Feedback):Observable <string>{
    return this.http.post<string>(`${this.uri}/upsertFeedback`, feedback)
  }
  deleteFeedback(id:number):Observable<string>{
    return this.http.get<string>(`${this.uri}/deleteFeedback/${id}`)
  }
  getFeedbacksdim():Observable<number>{
    return this.http.get<number>(`${this.uri}/getFeedbacksDim`)
  }
}
