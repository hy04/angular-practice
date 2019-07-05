import { Component, OnInit } from '@angular/core';

//import services
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  public keyword:string;
  public historylist:any[]=[];

  constructor(public storage:StorageService) { 
    
  }

  ngOnInit() {
    console.log('页面每次刷新会调用生命周期函数');
    //每次刷新都从localstorage里获取数据，存入searchlist并读取
    var searchlist:any =this.storage.get('searchlist');
    if(searchlist){
      this.historylist=searchlist;
    }
  }
  doSearch(){
    //如果当前关键字不存在在列表里
    if(this.historylist.indexOf(this.keyword)==-1){
      this.historylist.push(this.keyword);
      //存入浏览器中的local storage里
      this.storage.set('searchlist',this.historylist);
    }
    console.log(this.keyword);
    this.keyword='';
  }
  deleteHistory(key){
    console.log(key);
    this.historylist.splice(key,1)
    this.storage.set('searchlist',this.historylist);
  }

}
