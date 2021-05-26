import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  
  courses=['Laravel','Angular','spring','java'];
  constructor() { }

  ngOnInit(): void {
  }
  addCours(){
    this.courses.push("cours ajouter")
  }
  delete(c){
   let index=this.courses.indexOf(c);
   this.courses.splice(index,1);
  }
 
}
