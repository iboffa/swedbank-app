import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  currentForm:FormGroup;

  forms={
    'Personal Data': new FormGroup({
      'First name': new FormControl(null, Validators.required),
      'Last name': new FormControl(null, Validators.required),
      'Date of birth': new FormControl(null, Validators.required),
      'E-Mail address':new FormControl(null, Validators.required),
      'Phone number':new FormControl(null, Validators.required)
    }),
    'Employment Status': new FormGroup({
      Employed: new FormControl({value: false})
    }),
    'Income Info': new FormGroup({
      'Employment sector': new FormControl(null, Validators.required),
      'Main income source': new FormControl(null, Validators.required),
      'Net annual income': new FormControl(null, Validators.required)

    }),
    'Loan Info': new FormGroup({
      "Loan amount": new FormControl(500),
      "Loan term": new FormControl(6)
    })
  }

  constructor() {
   }
}
