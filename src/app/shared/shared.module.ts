import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SidebarLayoutComponent,
  SidebarComponent,
  FooterComponent,
  HeaderComponent,
  PreloaderComponent,
  FullpageLayoutComponent
} from './components/';

@NgModule({
  declarations: [
    SidebarLayoutComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    FullpageLayoutComponent,
    PreloaderComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    SidebarLayoutComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    FullpageLayoutComponent,
    PreloaderComponent
  ]
})
export class SharedModule {}
