import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

const routes: Routes = [
  {
    path:'main',
    component:MainComponent
  },{
    path:'',
    redirectTo:'main', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    // Provide PathLocationStrategy to use clean URLs with query parameters
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
})
export class AppRoutingModule { }
