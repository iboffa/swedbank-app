import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-employment-status',
  templateUrl: './employment-status.component.html',
  styleUrls: ['./employment-status.component.scss']
})
export class EmploymentStatusComponent implements OnInit {
  form: FormGroup;
  constructor(readonly formService: FormService) { }


  ngOnInit(): void {

    this.form =this.formService.forms["Employment Status"];
    this.formService.currentForm=this.form;

}
}