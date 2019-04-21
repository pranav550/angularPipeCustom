import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularcustomPipe';
  employees:any=[
    {code :'001', name:'Ajeet', gender:'male', salary:50000 },
    {code :'002', name:'Abhay', gender:'male', salary:50000},
    {code :'003', name:'Akash', gender:'male', salary:50000},
    {code :'004', name:'Ravi', gender:'male', salary:50000},
    {code :'005', name:'Rani', gender:'female', salary:50000},
  ]
}
