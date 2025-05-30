import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../models/experience';
import { NewExperience } from '../models/new-experience';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {
  // Properties
  url: string = 'http://localhost:3000/experiences';
  constructor(private http: HttpClient) { }

  // Metoder
  // Hämta alla data från url
  getData(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.url);
  }
  
  // Hämta en specifik data
  getChosenData(id: string): Observable<Experience> {
    return this.http.get<Experience>(`${this.url}/${id}`);
  }
  // Posta ny data
  postData(experience: NewExperience): Observable<NewExperience> {
    return this.http.post<NewExperience>(this.url, experience);
  }

  // Uppdatera data
  updateData(id:string, experience: Experience): Observable<Experience> {
    return this.http.put<Experience>(`${this.url}/${id}`, experience, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
  
  // Radera data
  deleteData(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
