import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../Employee.Service';

@Component({
  selector: 'app-deleteemployee',
  templateUrl: './deleteemployee.component.html',
  styleUrls: ['./deleteemployee.component.css'],
   providers: [EmployeeService]
})
export class DeleteemployeeComponent implements OnInit {

  constructor(private data : EmployeeService) { }
  model: any = {};
  employees: Array<any>;
  deleteDumb:any;

  pageNo:any = 1;
  offSetParent:any = 0;

  ngOnInit() {
   this.data.getEmployee(this.pageNo, this.offSetParent).subscribe(
			res => {
			//	this.loadingSpinnerFlag[key] = false;
				this.employees = res.Result;
			},
			err => {
				//this.loadingSpinnerFlag[key] = false;
			});
  }

   Delete(index, employeeObj){
    
      this.employees.splice(index, 1);    
      console.log("ID : " + employeeObj.r_id);
      this.data.deleteEmployee(employeeObj.r_id).subscribe(
			res => {
			//	this.loadingSpinnerFlag[key] = false;
				this.deleteDumb = res.Result;
			},
			err => {
				//this.loadingSpinnerFlag[key] = false;
			});
  
    }

    onPageChangeEvent(offsetChild:any){
      this.offSetParent = offsetChild;
      this.ngOnInit();
    }


}
