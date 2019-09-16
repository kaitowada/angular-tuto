import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MycheckService} from '../mycheck.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})

export class MessageComponent implements OnInit {
  @Input() content: string[];

  constructor(private service: MycheckService) {
    this.content = [];
  }

  ngOnInit() {
    
  }

  doAction (event) {

  }
}
