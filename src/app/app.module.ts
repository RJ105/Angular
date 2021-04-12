import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { NewComponent } from  './new/new.component';
import { ReadmoreComponent } from './readmore/readmore.component';
import { EditComponent } from './edit/edit.component';
import {ArticleService } from './services/article.service';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    ReadmoreComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
