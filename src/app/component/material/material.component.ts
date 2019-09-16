import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {
  message: string;
  constructor() { }

  ngOnInit() {
    this.message = 'please select';
  }

  changeMessage(v) {
    this.message = 'select: ' + v;
  }
}
