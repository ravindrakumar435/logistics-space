import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



// route guard


const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/signIn',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) =>m.AuthModule),
  
  },
  {
    path: 'event',
    loadChildren: () =>
      import('./modules/events/events.module').then((m)=>m.EventsModule),
     
  
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}