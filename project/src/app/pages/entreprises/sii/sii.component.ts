import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sii',
  templateUrl: './sii.component.html',
  styleUrls: ['./sii.component.css']
})
export class SiiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goTo(location: string): void {
    window.location.hash = '';
    window.location.hash = location;
  }
}
