import { Component, OnInit, trigger, state, style, transition, animate, } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ValidatorService } from '../../validator.service';


 
@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css'],
  providers: [EmployeeService]
  // animations: [
  //   trigger(
  //     'myAnimation', [
  //       transition('void => *', [
  //         style({
  //           transform: 'rotateY(180deg)', transition: '0.5s',
  //           'transform-style': 'preserve-3d',
  //           'backface-visibility': 'hidden',
  //           opacity: 0
  //         }),
  //         animate('200ms', style({
  //           transform: 'rotateY(0deg)',
  //           transition: '0.5s',
  //           'transform-style': 'preserve-3d',
  //           'backface-visibility': 'hidden',
  //           opacity: 1
  //         }))
  //       ]),
  //       transition('* => void', [
  //         style({
  //           transform: 'rotateY(0deg)',
  //           transition: '0.5s',
  //           'transform-style': 'preserve-3d',
  //           'backface-visibility': 'hidden',
  //           'opacity': 1
  //         }),
  //         animate('200ms', style({
  //           transform: 'rotateY(180deg)',
  //           transition: '0.5s',
  //           'transform-style': 'preserve-3d',
  //           'backface-visibility': 'hidden',
  //           opacity: 0
  //         }))
  //       ])
  //     ]
  //   )
  // ]
})

export class AddemployeeComponent implements OnInit {
  
  showURL:any;
   
  id:any;
  f_name:any;
  l_name:any;
  emali:any;
  j_pos:any;
  department:any;
  salary:any;

  

  constructor( private _formBuilder: FormBuilder, private data: EmployeeService) { 
    
  }
  
  public toast:boolean = false;
  button:any = "Submit";
  isUpdate:boolean = false;
  employees = [];
  empData = {};
  count:any;
  employeeForm : FormGroup;
  randomPassword:any = Math.floor(Math.random() * 3000) + 1000;
  // temp = {
  //       ID: '',
  //   		FirstName: '',
  //   		LastName : '',
  //   		Email: '',
  //   		JobPosition: '',
  //   		Department: '',
	// 		Salary: '',
	// 		ProfilePic:''
  // }
  
   ngOnInit() {

    //this.employees = this.dataService.fetchData();
    this.count = this.employees.length;	

    this.employeeForm = this._formBuilder.group({
    
      ID : ['', Validators.compose([Validators.required, Validators.pattern("[0-9]+")])],
      FirstName :['', [Validators.required, ValidatorService.FirstNameValidator]],
      LastName:['', [Validators.required , ValidatorService.LastNameValidator]],
      Email:['', [Validators.required,  ValidatorService.EmailValidator]],
      JobPosition:['', Validators.compose([Validators.required])],
      Department:['', Validators.compose([Validators.required])],
      Salary: ['', [Validators.required, ValidatorService.SalaryValidator]]
     
   })
    

  }  

  Submit(){      
    
//     console.log("ID " + this.employeeForm.controls["ID"].value);

      this.id = this.employeeForm.controls["ID"].value;
      this.f_name = this.employeeForm.controls["FirstName"].value;
      this.l_name = this.employeeForm.controls["LastName"].value;
      this.emali = this.employeeForm.controls["Email"].value;
      this.j_pos = this.employeeForm.controls["JobPosition"].value;
      this.department = this.employeeForm.controls["Department"].value;
      this.salary = this.employeeForm.controls["Salary"].value;
  
 //  var flag = false; 
    this.data.addEmployee(this.id, this.f_name, this.l_name, this.emali, this.randomPassword, this.j_pos, this.department,  this.salary).subscribe(
			res => {
			//	this.loadingSpinnerFlag[key] = false;
            this.employeeForm.reset();
                this.toast = true;
      
			},
			err => {
				//this.loadingSpinnerFlag[key] = false;
      });
    
      
     
    // for(var i = 0; i< this.employees.length; i++){
  
    //     if(this.employeeForm.value.ID == this.employees[i].ID){
  
    //         flag = true;              
  
    //       }
    //     if(flag){
        
    //       alert("Account with this ID Already Exist");
    //       break;
  
    //     }
    //     else if(i+1 == this.employees.length ){

    //           this.employees.push(this.employeeForm.value);  
    //           this.employees[i+1].ProfilePic = this.showURL;   
    //           i = this.employees.length + 1;
    
    //      } 
                
    //   }  
  }
          
         
  Cancel(){
      this.employeeForm.reset();
      //if(this.isUpdate){
      //  
       // this.isUpdate = false;
       // this.Button = "Submit";
      // }
       
       
  }

  

  onNotifyEmit(message:any): void{
      this.showURL = message;
     
  }

 
  // Edit(employee){
    

  //   if(!this.isUpdate){
  //     this.isUpdate = true;

  //     this.button = "Update";
  //   }
    
  //   /*console.info(empObj);*/
  //     // empObj.hasOwnProperty(employee);
      
  //     console.log(employee.ID );
  //     this.employeeForm.controls["ID"].setValue(employee.ID);
  //     this.employeeForm.controls["FirstName"].setValue(employee.FirstName);
  //     this.employeeForm.controls["LastName"].setValue(employee.LastName);
  //     this.employeeForm.controls["Email"].setValue(employee.Email);
  //     this.employeeForm.controls["JobPosition"].setValue(employee.JobPosition);
  //     this.employeeForm.controls["Department"].setValue(employee.Department);
  //     this.employeeForm.controls["Salary"].setValue(employee.Salary);
  //     console.log(employee.ProfilePic);
      
  // }

  // Delete(index){

  //     this.employees.splice(index, 1);    
  
  //   }

  // Update(){
    
  //   this.isUpdate = false;
  //   this.button = "Submit";
     
  //    for (var i=0; i<this.employees.length; i++) {
  //           // console.log("Employee " + this.employeeForm.value.ID);
  //           if (this.employees[i].ID == this.employeeForm.value.ID) {
  //          //  console.log("ID : " + this.employeeForm.controls["ID"]);
              
  //             this.employees[i] = this.employeeForm.value;
  //             break;
  //           }
  //    }
  //    this.Cancel();

  // }


}
