import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'signIn',
        component: SigninComponent,
      },
      { path: "", redirectTo: "/signIn" , pathMatch: "full"},
      ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
