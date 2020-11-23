import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { FormService } from '../form.service';
import { StateService } from '../state.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  summary = {};

  constructor(readonly formService: FormService, readonly stateService: StateService) { }

  ngOnInit(): void {

    Object.keys(this.formService.forms).forEach((form) => {
      this.summary[form] = this.formService.forms[form].value
    });
    this.summary["Personal Data"]["Date of birth"] = moment(this.summary["Personal Data"]["Date of birth"]).format("DD/MM/YYYY");
    this.summary["Loan Info"]["Loan amount"] = `${this.summary["Loan Info"]["Loan amount"]}€`;
    this.summary["Loan Info"]["Loan term"] = `${this.summary["Loan Info"]["Loan term"]} months`;
    this.summary["Employment Status"]["Employed"] ? this.summary["Employment Status"]["Employed"] = 'Yes' : this.summary["Employment Status"]["Employed"] = 'No'

  }



  back() {
    this.stateService.state = "application";
  }
}