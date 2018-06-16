import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  constructor( ) { }

  ngOnInit() {
  }

  monthsFrom(j,m,a){
    // month-1 because months starts at 0
    let date = new Date(Date.UTC(a,m-1,j));
    let today = new Date(Date.now());
    return (today.getMonth() - date.getMonth() + (today.getFullYear() - date.getFullYear()) * 12);
  }

}
