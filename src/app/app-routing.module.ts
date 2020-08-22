import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullpageLayoutComponent, SidebarLayoutComponent } from './shared/components/';

const routes: Routes = [
  {
    path: 'launch-programs',
    component: SidebarLayoutComponent,
    loadChildren: () => import('./features/launch-programs/launch-programs.module').then(m => m.LaunchProgramsModule)
  },
  {
    path: 'error',
    component: FullpageLayoutComponent,
    loadChildren: () => import('./features/error/error.module').then(m => m.ErrorModule)
  },
  {
    path: '',
    redirectTo: 'launch-programs',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'error/404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
