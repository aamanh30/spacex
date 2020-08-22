import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchProgramsRoutingModule } from './launch-programs-routing.module';
import { LaunchProgramsPageComponent } from './pages/launch-programs-page/launch-programs-page.component';
import { LaunchProgramCardComponent } from './components/launch-program-card/launch-program-card.component';


@NgModule({
  declarations: [LaunchProgramsPageComponent, LaunchProgramCardComponent],
  imports: [
    CommonModule,
    LaunchProgramsRoutingModule
  ]
})
export class LaunchProgramsModule { }
