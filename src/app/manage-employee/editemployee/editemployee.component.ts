import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../Employee.Service'

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css'],
  providers: [EmployeeService]
})
export class EditemployeeComponent implements OnInit {
  
  pageNo:any = 1;
  parentoffSet:any = 0 ;
  edit:boolean = true;
  save:boolean = false;
  editedIndex:any;
  editMode: boolean ;
  employees: Array<any>;
  constructor(private data : EmployeeService) { }

  ngOnInit() {
     this.data.getEmployee("", this.parentoffSet).subscribe(
			res => {
			//	this.loadingSpinnerFlag[key] = false;
				this.employees = res.Result;
			},
			err => {
				//this.loadingSpinnerFlag[key] = false;
			});
  }
    Edit(index:any, empId:any){
      this.editMode = true;
      this.editedIndex = index;
      this.save = true;
      this.edit = false;
    }
    
    Save(){

    }
    onPageChangeEvent(offSetChild:any){
        this.parentoffSet = offSetChild;
        this.ngOnInit();
    }

}
