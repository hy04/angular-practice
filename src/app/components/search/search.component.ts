import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  public keyword:string;
  public historylist:any[]=[];

  constructor() { }

  ngOnInit() {
  }
  doSearch(){
    //如果当前关键字不存在在列表里
    if(this.historylist.indexOf(this.keyword)==-1){
      this.historylist.push(this.keyword);
    }
    console.log(this.keyword);
    this.keyword='';
  }
  deleteHistory(key){
    console.log(key);
    this.historylist.splice(key,1)
  }

}
