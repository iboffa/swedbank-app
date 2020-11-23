import { Component, OnInit } from '@angular/core';

import { StateService } from '../state.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor(readonly stateService: StateService) { }

  ngOnInit(): void {
  }

  startApplication(){
    this.stateService.state="application";
  }

}
