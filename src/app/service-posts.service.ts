import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicePostsService {

  constructor(private http: HttpClient) { }


 

  creatP(post:any):Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post);
  }


  getP():Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
 
  updateP(post:any):Observable<any> {
    return this.http.put('https://jsonplaceholder.typicode.com/posts/' + post.id, post)
  
  }
  deleteP(post):Observable<any>{
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/' + post.id)
  }

}
