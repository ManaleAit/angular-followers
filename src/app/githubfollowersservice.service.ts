import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class GithubfollowersserviceService  {

  constructor(private http:HttpClient) {
    
   }

   getMethode():Observable<any>{
     return this.http.get('http://api.github.com/users/IDBRAHIMDEV/followers');
   }
}
