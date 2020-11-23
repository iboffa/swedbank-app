import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {
 form: FormGroup;
 phoneRegex= /[\+0-9]+$/

 

  constructor(readonly formService:FormService) { }

  ngOnInit(): void {
    this.form=this.formService.forms["Personal Data"];
    this.formService.currentForm=this.form;
  }

}
