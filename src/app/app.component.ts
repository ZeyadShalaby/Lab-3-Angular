import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task3';

  students:{name:string, age:string}[] =[];

  getInfo(info: any){
 
    this.students.push(info)
  }
}
