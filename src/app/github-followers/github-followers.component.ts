import { Component, OnInit } from '@angular/core';
import { GithubfollowersserviceService } from '../githubfollowersservice.service';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers:any[];
  constructor(private service:GithubfollowersserviceService) { }

  ngOnInit(): void {
      this.service.getMethode().subscribe(followers=> this.followers=followers);
  }

}
