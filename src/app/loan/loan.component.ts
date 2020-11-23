import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent implements OnInit {
  form: FormGroup;

  constructor(readonly formService: FormService) { }

  ngOnInit(): void {
    this.form = this.formService.forms["Loan Info"];
    this.formService.currentForm=this.form;
  }

}
