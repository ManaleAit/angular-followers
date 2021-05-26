import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetangular';
  post={
      title : 'projetangular',
      isActive: true,
      format:'lowercase'
  }
  maFonction(isActive){
    console.log("output event: ",isActive);
  }
}
