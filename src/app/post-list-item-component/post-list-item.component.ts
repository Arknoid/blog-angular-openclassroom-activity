import { Post } from '../shared/interfaces/posts.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post;
  likeCounter: number;
  liked: boolean;
  equalLike: boolean;

  constructor() {
    this.likeCounter = 0;
    this.liked = false;
    this.equalLike = true;
  }
  ngOnInit() {
  }

  addLike() {
    this.likeCounter ++;
    this.checkLiked();
  }

  addUnlike() {
    this.likeCounter --;
    this.checkLiked();
  }

  checkLiked() {
    if (this.likeCounter > 0) {
      this.liked = true;
      this.equalLike = false;
    } else if (this.likeCounter === 0) {
      this.equalLike = true;
    } else {
      this.liked = false;
      this.equalLike = false;
    }

  }
}
