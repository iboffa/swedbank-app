import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-income-info',
  templateUrl: './income-info.component.html',
  styleUrls: ['./income-info.component.scss']
})
export class IncomeInfoComponent implements OnInit {
  form: FormGroup;
  employed: boolean;

  constructor(readonly formService: FormService) { }
  incomeSources = [{
    label: 'State subsides', value: 'State subsides'
  },
  { label: 'Rental income', value: 'Rental income' },
  { label: 'Trading', value: 'Trading' },
  { label: 'Other', value: 'Other' }]
  ngOnInit(): void {
    this.employed=this.formService.forms["Employment Status"].get("Employed").value;
    this.form = this.formService.forms["Income Info"];
    if(this.employed){
      this.form.get("Main income source").disable();
      this.form.get("Main income source").setValidators([]);
      this.form.get("Employment sector").enable();
      this.form.get("Employment sector").setValidators([Validators.required]);
    }
    else{
      this.form.get("Employment sector").disable();
      this.form.get("Employment sector").setValidators([]);
      this.form.get("Main income source").enable();
      this.form.get("Main income source").setValidators([Validators.required]);
    }
    
    this.form=this.formService.forms["Income Info"]; 
    this.formService.currentForm=this.form; 
    
  }

}
