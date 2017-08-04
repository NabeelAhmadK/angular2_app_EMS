import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-showemployee',
  templateUrl: './showemployee.component.html',
  styleUrls: ['./showemployee.component.css'],
  providers: [EmployeeService]
})
export class ShowemployeeComponent implements OnInit {
  
  highActivityData: Array<any>;
  offSetParent:any = 0;
  


  constructor(private dataService : EmployeeService) {

  }

  
    ngOnInit() {
      this.dataService.getEmployee("", this.offSetParent).subscribe(
  			res => {
  			//	this.loadingSpinnerFlag[key] = false;
  				this.highActivityData = res.Result;
  			},
  			err => {
  				//this.loadingSpinnerFlag[key] = false;
  			});
    }

    onPageChangeEvent(offSetChild:any){
            this.offSetParent = offSetChild;
            this.ngOnInit();

    }
    
  

}
