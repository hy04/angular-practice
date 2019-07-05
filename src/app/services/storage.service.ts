import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  //把搜索过的数据存入浏览器中的application/local storage里
  set(key:string,value:any){
    localStorage.setItem(key,JSON.stringify(value));
  }
  //从local storage 里读取数据
  get(key:string){
    return JSON.parse(localStorage.getItem(key));
  }
  //从local storage里删除数据
  remove(key:string){
    localStorage.removeItem(key);
  }
}
