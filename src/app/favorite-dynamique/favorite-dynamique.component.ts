import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite-dynamique',
  templateUrl: './favorite-dynamique.component.html',
  styleUrls: ['./favorite-dynamique.component.css'],
  // inputs:['isActive']
})
export class FavoriteDynamiqueComponent implements OnInit {
  style="glyphicon glyphicon-star";
  @Input('is-Act-alias') isActive:boolean=true;
  @Output() change= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  solution(){ 
    this.isActive=!this.isActive;
    this.change.emit(this.isActive);
  }
  mySolution(){
    if(this.style==="glyphicon glyphicon-star"){
      this.style="glyphicon glyphicon-star-empty";
    }
    else{
      this.style="glyphicon glyphicon-star";
    }
  }


}
