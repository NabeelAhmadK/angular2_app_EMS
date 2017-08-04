import { Injectable } from '@angular/core';

@Injectable()
export class ValidatorService {

  constructor() { }

  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    let config = {
      'required': 'This field is required!',
      'invalidID': 'Invalid ID',
      'invalidEmailAddress': 'Invalid Email Address',
      'invalidFirstName': 'Invalid First Name',
      'invalidLastName': 'Invalid Last Name',
      'invalidSalary': 'Invalid Salary',
      'invalidLetterNumberSpace': 'Invalid characters entered.',
      'minlength': `Minimum length ${validatorValue.requiredLength}`,
      'maxlength': `Maximum length ${validatorValue.requiredLength}`
    };
    return config[validatorName];
  }

  static FirstNameValidator(control){
    if(control.value.match(/[A-Z][a-z]+?/)){
      return null;
    }
    else{
      return { 'invalidFirstName' : true };
    }
  }
  
  static EmailValidator(control) {
    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return { 'invalidEmailAddress': true };
    }
  }
  
  static SalaryValidator(control) {
    if (control.value.match(/^\d+$/)){
      return null;
    }
     else {
      return { 'invalidSalary': true };
    }
  }

  
  static LastNameValidator(control) {
    if (control.value.match(/[A-Z][a-z]+?/)){
      return null;
    }
     else {
      return { 'invalidLastName': true };
    }
  }
  

}
