import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profilfollwer',
  templateUrl: './profilfollwer.component.html',
  styleUrls: ['./profilfollwer.component.css']
})
export class ProfilfollwerComponent implements OnInit {

  followers:any[];
  id:number;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params=>{
        this.id=+params.get('username');
        console.log(params.get('username'))
      }
    )
  }

}
