import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../shared/interfaces/posts.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() posts: Post[];

  constructor() {}

  ngOnInit() {
    console.log(this.posts);
  }

}

