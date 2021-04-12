import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { article } from './article';
 
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http : HttpClient) { }

  getArticles() : Observable<any[]>{
    return this.http.get<any[]>("http://localhost:3000")
  }

  
}
