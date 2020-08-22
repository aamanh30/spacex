import { LaunchProgram } from './../../../../core/models/launch-program';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-launch-program-card',
  templateUrl: './launch-program-card.component.html',
  styleUrls: ['./launch-program-card.component.scss']
})
export class LaunchProgramCardComponent implements OnInit {
  @Input() program: LaunchProgram;
  constructor() { }

  ngOnInit(): void {
  }

}
