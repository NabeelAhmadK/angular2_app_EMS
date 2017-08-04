import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidatorService } from '../validator.service';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  constructor() { }

  @Input() control: FormControl;
  text:any;

  ngOnInit() {
  }
  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if ((this.control.errors.hasOwnProperty(propertyName) && this.control.touched)) {
        return ValidatorService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
        
      }
    }
    return null;
  }

}
