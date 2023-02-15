import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  name = "";
  age = "";
  student ={};

  @Output () anEvent = new EventEmitter();

  add(){
    if( this.name.length < 3 || +this.age < 20 || +this.age > 40 || !+this.age){
      alert ("Invalid Input")
    } 
    else{
      let student: {name: string; age: string;} = {
        name: this.name,
        age: this.age
      };
    this.anEvent.emit(student);
    console.log(student)

    }
  }

}
