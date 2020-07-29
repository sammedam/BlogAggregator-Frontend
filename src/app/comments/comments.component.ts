import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: any;
  constructor(private apiService: ApiService) { }


  ngOnInit(): void {
    this.loaddata();

  }
  loaddata() {
    this.apiService.getComments().subscribe((data)=>{
      console.log(data);
      this.comments = data;
});
  }}
