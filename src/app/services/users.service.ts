import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'reqres.in/api/users'

  constructor(private http: HttpClient) { }


}
