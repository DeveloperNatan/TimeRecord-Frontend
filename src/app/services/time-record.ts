import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TimeRecordResponse } from '../models/time-record.model';

@Injectable({
  providedIn: 'root',
})
export class TimeRecordService {
  private apiUrl = 'http://localhost:5144/api/timerecords';

  constructor(private http: HttpClient) {}

  Record(matriculation: number) {
    return this.http.post<TimeRecordResponse>(this.apiUrl, { Matriculation: matriculation });
  }
}
