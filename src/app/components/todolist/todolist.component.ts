import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  public keyword:string;
  public todolist:any[]=[];



  constructor() { }

  ngOnInit() {
  }

  doAdd(e){
    if(e.keyCode==13){
      console.log(this.keyword)
      if(this.isNull(this.keyword)){
        alert("不能为空")
      }
      else{
        if(!this.todolistHasKeyword(this.todolist,this.keyword)){
          this.todolist.push({
          title:this.keyword,
          status:0  //0未完成 1已完成
        });
      }else{
        alert("repeat data");
      }
      this.keyword='';
      }
      
    }
    
  }
  deleteData(key){
    this.todolist.splice(key,1);
  }
  //查看todolist中有没有该keyword
  todolistHasKeyword(todolist:any,keyword:any){
    //异步
  //   todolist.forEach(value => {
  //       if(value.title==keyword){
  //         return true;
  //       }
  //   });
  //   return false;
  // }
  if(!keyword) return false;
  for(var i=0;i<todolist.length;i++){
    if(todolist[i].title==keyword){
      return true;
    }
  }
  return false;

  }

  isNull(str){
    if(str=="" || str==undefined){
      return true;
    }
    var regu="^[]+$";
    var re=new RegExp(regu);
    return re.test(str);
  }
}
