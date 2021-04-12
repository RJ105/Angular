import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from  './new/new.component';
import { ReadmoreComponent } from './readmore/readmore.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path : 'articles/new', component: NewComponent },
  { path : 'articles/:id', component: ReadmoreComponent },
  { path : 'articles/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [NewComponent]