import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Courses1Component } from './courses1/courses1.component';
import { ResumePipe } from './resume.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { FavoriteDynamiqueComponent } from './favorite-dynamique/favorite-dynamique.component';
import { PanelComponent } from './panel/panel.component';
import { PersoneldirectiveComponent } from './personeldirective/personeldirective.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { ProfilfollwerComponent } from './profilfollwer/profilfollwer.component';

/*const routes: Routes = [
  {
    path: "post", component: PostsComponent,

  },
  {
    path: "favorite", component: FavoriteComponent,

  },
  {
    path: "panel", component: PanelComponent,

  
  }

]*/
//path:"post"/:id"
//path:"**"  kat verifi wach kayna route deja f liste des routes ila makntch kat rederijina liha
@NgModule({
  declarations: [
    AppComponent,
    Courses1Component,
    ResumePipe,
    FavoriteComponent,
    FavoriteDynamiqueComponent,
    PanelComponent,
    PersoneldirectiveComponent,
    ContactFormComponent,
    SignupFormComponent,
    PostsComponent,
    NavbarComponent,
    GithubFollowersComponent,
    ProfilfollwerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    //RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
