import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
articles: any;
authors:any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loaddata();
    this.loaddataauthor();
  }

  loaddata() {
    this.apiService.getArticles().subscribe((data)=>{
      console.log(data);
      this.articles = data;
  });

  }
  loaddataauthor() {
    this.apiService.getAuthors().subscribe((data)=>{
      console.log(data);
      this.authors = data;
  });
  }
}
