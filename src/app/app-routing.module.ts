import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ArticlesComponent} from './articles/articles.component'
import { CommentsComponent } from './comments/comments.component';
const routes: Routes = [
  {path:'articles', component: ArticlesComponent},
  {path: 'comments', component:CommentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), 
  HttpClientModule,
],
  exports: [RouterModule]
})
export class AppRoutingModule { }

