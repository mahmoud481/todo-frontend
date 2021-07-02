import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }


  // Get All Items
  getAll() {
    return this.http.get(`${environment.apiUrl}/notes`)
  }
  // Delete Note
  deleteNote(id: any) {
    return this.http.delete(`${environment.apiUrl}/notes/${id}`);
  }
  //Add New Note
  addNote(data: any) {
    return this.http.post(`${environment.apiUrl}/notes/`, data);

  }
  // Update Note
  updateNote(data: any, id: any) {
    return this.http.put(`${environment.apiUrl}/notes/${id}`, data);
  }
  // get one Note by id
  getNoteById(id: any) {
    return this.http.get(`${environment.apiUrl}/notes/${id}`)
  }
}
