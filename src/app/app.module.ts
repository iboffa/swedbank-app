import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StepsModule} from 'primeng/steps';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'primeng/toast';
import {KeyFilterModule} from 'primeng/keyfilter';
import {InputSwitchModule} from 'primeng/inputswitch';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import {SliderModule} from 'primeng/slider';


import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { StepFormComponent } from './step-form/step-form.component';
import { EmploymentStatusComponent } from './employment-status/employment-status.component';
import { IncomeInfoComponent } from './income-info/income-info.component';
import { SummaryComponent } from './summary/summary.component';
import { IntroComponent } from './intro/intro.component';
import { MessageService } from 'primeng/api';
import { LoanComponent } from './loan/loan.component';
import {ToolbarModule} from 'primeng/toolbar';




@NgModule({
  declarations: [
    AppComponent,
    PersonalDataComponent,
    StepFormComponent,
    EmploymentStatusComponent,
    IncomeInfoComponent,
    SummaryComponent,
    IntroComponent,
    LoanComponent],
  imports: [
    BrowserModule,
    StepsModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    CardModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    ToastModule,
    KeyFilterModule,
    InputSwitchModule,
    DropdownModule,
    InputNumberModule,
    SliderModule,
    ToolbarModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
