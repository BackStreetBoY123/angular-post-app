import { Component, OnInit } from '@angular/core';
import { PostsService } from './../../services/posts.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts:any;
  constructor(private http:HttpClient) { }
  ngOnInit() {
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((data)=>{
       this.posts = data;
       console.log(this.posts,"this pists")
    });

  }

}
