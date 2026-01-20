import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { PostService } from '../post.service';
import { PostViewModel,Post,User } from '../models';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  standalone : false
})
export class PostsComponent {

  postsVm$: Observable<PostViewModel[]>;

  constructor(private postService: PostService) {

    this.postsVm$ = this.postService.getPosts().pipe(

      mergeMap(postsResponse =>
        this.postService.getUsers().pipe(

          map(usersResponse => {
            const posts: Post[] = postsResponse.posts;
            const users: User[] = usersResponse.users;

            return posts
              .filter(post =>
                users.some(u => u.id === post.userId)
              )
              .map(post => {
                const user = users.find(u => u.id === post.userId)!;

                return {
                  postId: post.id,
                  title: post.title,
                  authorName: `${user.firstName} ${user.lastName}`,
                  authorEmail: user.email
                } as PostViewModel;
              });
          })

        )
      )

    );
  }
}

