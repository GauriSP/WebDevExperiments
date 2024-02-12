import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com'; // JSONPlaceholder API URL

  constructor(private http: HttpClient) {}

  getUserData() {
    return this.http.get(`${this.apiUrl}/users/1`); // Fetch user data (replace with actual API call)
  }
}
