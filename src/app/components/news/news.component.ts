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
  public content="<h2>this is a h2 tag</h2>"
  constructor() { 
    this.message="this is initialization for message";

  }
  // 定义数组
  public arr=['111','222','333'];
  //推荐写法
  public list:any=['this is one', 22222, 'this is two'];

  public items:Array<string>=['wo shi di yi ge', 'wo shi di er ge'];

  public userlist:any=[
    {
      username:"zhangsan",
      age:20
    },
    {
      username:"lisi",
      age:30
    }
    
  ]

  ngOnInit() {
  }

}
