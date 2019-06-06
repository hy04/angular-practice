import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  title="我是新闻组件";
  public student:string="this is recommended";
  public userinfo:object={
    username:"zhangsan",
    age:20,
  }
  public message:any;
  constructor() { 
    this.message="this is initialization for message";

  }

  ngOnInit() {
  }

}
