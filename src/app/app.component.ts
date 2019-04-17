import { Post } from './shared/interfaces/posts.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[] = [{
    title: 'Mon premier post', date: new Date(),
    content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis assumenda cupiditate eum quis rerum saepe,
              architecto placeat blanditiis cumque odit magnam vero eos repellendus esse nemo! Suscipit fugiat hic exercitationem`,
  }, {
    title: 'Mon deuxième post', date: new Date(),
    content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis assumenda cupiditate eum quis rerum saepe,
            architecto placeat blanditiis cumque odit magnam vero eos repellendus esse nemo! Suscipit fugiat hic exercitationem`,
  }, {
    title: 'Encore un post', date: new Date(),
    content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis assumenda cupiditate eum quis rerum saepe,
            architecto placeat blanditiis cumque odit magnam vero eos repellendus esse nemo! Suscipit fugiat hic exercitationem`,
  }];
}
