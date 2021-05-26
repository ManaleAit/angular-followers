import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServicePostsService } from '../service-posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;
  status = true;
  post = {
    id: 0,
    title: '',
    body: '',
    userId: ''
  }
  constructor(private http:HttpClient, private servicePostsService:ServicePostsService) { 
  
  }
  creatPost(){
    this.servicePostsService.creatP(this.post).subscribe(
      rep => {
        this.posts.push(rep);
        (this.posts as []).reverse();
      }
    )
  }
  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.servicePostsService.getP().subscribe(

      response => {
        this.posts = response;
      },error=>{alert('erreur inattebdue')}
      )
  }
  editPost(post) {
    this.post = post;
    this.status = false;
  }

updatePost(){
  this.servicePostsService.updateP(this.post).subscribe(
    rep => {
      this.post = {

        id: 0,
        title: '',
        body: '',
        userId: ''
      }
      this.status = true;
    });
}
deletePost(post){
  this.servicePostsService.deleteP(post).subscribe(
    rep => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    }
  )}
}
