import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient:HttpClient) { }

  GetStudentDate():Observable<any> 
  {
    return this.httpClient.get('https://www.jsonblob.com/api/jsonblob/1215632557223043072');
  }
}