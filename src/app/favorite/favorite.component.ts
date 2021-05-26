import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  style="glyphicon glyphicon-star";
  isActive:boolean=true;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  solution(){ this.isActive=!this.isActive;}
  mySolution(){
    if(this.style==="glyphicon glyphicon-star"){
      this.style="glyphicon glyphicon-star-empty";
    }
    else{
      this.style="glyphicon glyphicon-star";
    }
  }
  navigateAllez(){
    this.route.navigate(['profil',15]);
  }
}
