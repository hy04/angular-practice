import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public flag:boolean=true;
  public order:number=2;
  public attr:string='orange';

  public today:any=new Date();
  public keywords:string='这是默认的值';
  
  constructor() {

    console.log(this.today);
   }

  ngOnInit() {
  }
  run(){
    alert('执行方法');
  }
  changekeywords(){
    this.keywords="im the changed value";
  }
  getkeywords(){
    alert(this.keywords);

  }

}
