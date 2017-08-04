import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [EmployeeService]
})
export class LoginComponent implements OnInit {

  constructor(private dataService: EmployeeService, private _loginformBuilder: FormBuilder, private router:Router) { }
  
  parentRouter = Router;

  employee=[];
  name:any;
  password:any;
  loginForm : FormGroup;
  errorMessage: any = "";

  ngOnInit() {
      //this.employee = this.dataService.fetchData();
      this.loginForm = this._loginformBuilder.group({
          Email: [],
          Password: []
      })
  }

 login(){
   for(var i = 0; i < this.employee.length; i++){
        if(this.loginForm.value.Email == this.employee[i].Email && this.loginForm.value.Password == this.employee[i].Password){
          this.router.navigateByUrl('manage');
          break;
        }
        else{
          this.errorMessage = "Invalid Credentials";
        }
   }
 }

}
