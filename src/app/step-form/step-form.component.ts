import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { FormService } from '../form.service';
import { MessageService } from 'primeng/api';

import { StateService } from '../state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-form',
  templateUrl: './step-form.component.html',
  styleUrls: ['./step-form.component.scss']
})
export class StepFormComponent implements OnInit {

  items: MenuItem[]


  constructor(readonly formService: FormService, readonly msg: MessageService, readonly stateService: StateService, private router:Router) {
  }


  step = 0;

  ngOnInit(): void {

    this.items = [{
      label: 'Personal Info',
    },
    { label: 'Employment' },
    { label: 'Income Info' },
    { label: 'Loan Info' },
    ]
  }

  nextStep() {
    console.log(this.formService.currentForm.value)
    if (this.formService.currentForm.valid) {
      this.step++;
    }
    else {
      this.msg.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please compile all fields'
      })
    }

  }

  previousStep() {
    this.step--;
  }

  showSummary(){

    this.stateService.state="summary";
  }

}
