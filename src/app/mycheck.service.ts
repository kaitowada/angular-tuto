import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyData } from './models/MyData';

@Injectable({
  providedIn: 'root'
})

export class MycheckService {
  private mydata: MyData = new MyData();

  constructor(private client: HttpClient) {
    this.client.get('/assets/data.json').subscribe((result: MyData) => {
      this.mydata = result;
    });
  }

  get(n: number) {
    return this.mydata.list[n];
  }

  get size() {
    return this.mydata.list.length;
  }

  get list() {
    return this.mydata.list;
  }

  get data() {
    return this.mydata.data;
  }
}
