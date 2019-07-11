import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit {
  //获取dom节点
  @ViewChild('myBox') myBox:any;
  //获取一个组件,获得组件实类
  @ViewChild('header2') header2:any;
  constructor() { }

  ngOnInit() {
    
  }
  
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.myBox.nativeElement.innerHTML);
    this.myBox.nativeElement.style.width="100px";
    this.myBox.nativeElement.style.height="100px";
    this.myBox.nativeElement.style.background='red'; 
    

    
     }

  getChildRun(){
    //调用子组件里面的方法
    this.header2.run();
  }

    

}
