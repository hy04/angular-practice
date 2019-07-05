import { Component, OnInit } from '@angular/core';
//import services
import { StorageService } from '../../services/storage.service';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  public keyword:string;
  public todolist:any[]=[];
  constructor(public storage:StorageService) { 
    console.log(this.storage.get('todolist'));
  }

  ngOnInit() {
    console.log('页面每次刷新会调用生命周期函数');
    //每次刷新都从localstorage里获取数据，存入searchlist并读取
    var todolist:any =this.storage.get('todolist');
    if(todolist){
      this.todolist=todolist;
    }
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
        //存入浏览器中的local storage里
        this.storage.set('todolist',this.todolist);
      }else{
        alert("repeat data");
      }
      this.keyword='';
      }
      
    }
    
  }
  deleteData(key){
    this.todolist.splice(key,1);
    this.storage.set('todolist',this.todolist);
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
  //判断输入框是否为空
  isNull(str){
    if(str=="" || str==undefined){
      return true;
    }
    var regu="^[]+$";
    var re=new RegExp(regu);
    return re.test(str);
  }
  checkboxChange(){
    console.log('触发事件');
    this.storage.set('todolist',this.todolist);
  }
}
