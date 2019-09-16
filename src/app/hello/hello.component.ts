import { Component, OnInit, ViewChild } from '@angular/core';
import { MycheckService } from '../mycheck.service';
import { ActivatedRoute } from '@angular/router';
import { MyData } from '../models/MyData';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
  providers: [MycheckService]
})

export class HelloComponent implements OnInit {
  title: string;
  message: string;

  constructor(private service: MycheckService, private route: ActivatedRoute, private client: HttpClient) {
  }

  ngOnInit() {
    this.title = 'Hello-app';
    // this.message = 'param: ' + JSON.stringify(this.route.snapshot.queryParamMap);
    // console.log('this.params', this.route);
    this.message = 'wait...';
    setTimeout(() => this.getDate(), 5000);
  }

  getDate() {
    this.client.get('assets/data.json').subscribe((result: MyData) => {
      this.message = 'data: ' + result.data;
    });
  }
}
