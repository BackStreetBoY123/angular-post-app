import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {

  id: string | null ="";
  posts:any;

  constructor(private route: ActivatedRoute, private http:HttpClient) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.http.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`).subscribe((data)=>{
       this.posts = data;
    }, (error) => {this.posts = error ;console.log(error.message)});

  }
}
