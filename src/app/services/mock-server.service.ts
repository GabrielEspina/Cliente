import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable}   from 'rxjs';
import { Patient } from '../model/patient.model';

@Injectable({
  providedIn: 'root'
})
export class MockServerService {

  constructor(private http: HttpClient) { }

  patientsUrl = "http://localhost:3000/patients";

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientsUrl);
  }
}
