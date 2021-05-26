import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoriteComponent } from './favorite/favorite.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { PanelComponent } from './panel/panel.component';
import { PostsComponent } from './posts/posts.component';
import { ProfilfollwerComponent } from './profilfollwer/profilfollwer.component';


const routes: Routes =  [
  {
    path: "post", component: PostsComponent,

  },
  {
    path: "favorite", component: FavoriteComponent,

  },
  {
    path: "git", component: GithubFollowersComponent,

  
  },
  {
    path: "profil/:username", component: ProfilfollwerComponent,

  
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
