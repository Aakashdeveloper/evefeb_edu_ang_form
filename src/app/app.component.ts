import { Component } from '@angular/core';
import {Employee} from './models/employee.model';
import {FormPoster} from './services/form-poster.service'
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular5 Forms';
  languages=["NodeJs","AngularJs","ReactJs"]
  model = new Employee("Edureka","Angular",0,true,"male","NodeJs");
  hasCodeLangError= false;

  firstToUpper(value:string){
    if(value.length>0)
      this.model.firstName = value.charAt(0).toUpperCase()+ value.slice(1);
    else
      this.model.firstName = value;
      
  }
  constructor(private formPoster:FormPoster){}

  validateCodeLang(event){
    if(this.model.codeLang === 'default')
       this.hasCodeLangError = true;
    else
       this.hasCodeLangError=false
  }

  submitForm(form:NgForm){
    
    this.validateCodeLang(this.model.codeLang)
    if(this.hasCodeLangError)
      return;
    console.log(this.model)
    this.formPoster.postEmployeeForm(this.model)

        .subscribe(
          data=>console.log('Success:', data),
          err => console.log('error',err)
        )
  }
}
/*
ng-untouched ng-pristine ng-valid
ng-touched   ng-dirty    ng-invalid
*/
