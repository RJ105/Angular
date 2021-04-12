import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from './services/article.service';
import { Router } from "@angular/router";
import { Identifiers } from '@angular/compiler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  public articles : any;

  constructor( private _articleservice : ArticleService,
    private _router : Router) { 
  }

  ngOnInit(){
    this._articleservice.getArticles().subscribe(
      data =>{
        this.articles = data
        console.log(this.articles)
      }
    )
    }
   

  //   onSelect(article){
  //     this._router.navigate(['/articles',article.id]);
  // }


}
