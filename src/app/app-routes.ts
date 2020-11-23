import { Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { StepFormComponent } from './step-form/step-form.component';
import { SummaryComponent } from './summary/summary.component';

export const routes:Routes=[
    {path:'intro', component: IntroComponent},
    {path:'application', component: StepFormComponent},
    {path:'summary', component: SummaryComponent},
    { path: '', redirectTo: 'intro', pathMatch: 'full' },
]