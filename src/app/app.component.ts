import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Practice';
  words:Array<string>=[
    'hi, I am Jayden',
    'and this is my first angular practice',
    'hope I will learn it fast.'
  ];
}
