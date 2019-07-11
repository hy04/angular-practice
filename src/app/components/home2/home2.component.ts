import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {
  public flag:boolean=true;
  constructor() { }

  ngOnInit() {
    //组件和指令初始化完成， 并不是真正的dom加载完成
    let oBox:any=document.getElementById('box');
    console.log(oBox.innerHTML);
    oBox.style.color="red";
    
    //获取不到dom节点
    // let oBox:any=document.getElementById('box1');
    // console.log(oBox.innerHTML);
    // oBox.style.color="red";
  }
  //视图加载完成后触发的方法  dom加载完成（建议把dom操作放在这）
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  let oBox:any=document.getElementById('box1');
    console.log(oBox.innerHTML);
    oBox.style.color="red";
    
  }

}
