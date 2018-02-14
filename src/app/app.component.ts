import { Component } from '@angular/core';
import {Employee} from './models/employee.model';


@Component({
  selector: 'app-form',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular5 Forms';
  languages=["NodeJs","AngularJs","ReactJs"]
  model = new Employee("Edureka","Angular",true,"male","NodeJs")
}
