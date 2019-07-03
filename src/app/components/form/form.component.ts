import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public peopleInfo:any={
    username:1111,
    sex:"1",
    citylist:['beijing','shanghai','shenzhen'],
    city:'beijing',
    hobby:[{
      title:'eat',
      checked:false
    },
    {
      title:'sleep',
      checked:false
    },
    {
      title:'coding',
      checked:true
    },],
    mark:''
  }

  constructor() { }

  ngOnInit() {
    
    

  }

  doSubmit(){
    // 一种方法 dom操作
    let usernameDom:any=document.getElementById('username');
    console.log(usernameDom.value);
    //双向数据绑定方法
    console.log(this.peopleInfo);


  }

}
