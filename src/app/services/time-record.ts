import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimeRecordService {
  private apiUrl = 'http://localhost:5144/api/timerecords';

  constructor(private http: HttpClient) {}

  Record(matriculation: number) {
    return this.http.post(this.apiUrl, { Matriculation: matriculation });
  }
}
