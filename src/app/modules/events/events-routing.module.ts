import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventLayoutComponent } from './components/event-layout/event-layout.component';
import { EventDashboardComponent } from './components/event-dashboard/event-dashboard.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { EventEventsComponent } from './components/event-events/event-events.component';

const routes: Routes = [
  {
    path: '',
    component: EventLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: EventDashboardComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'events',
        component: EventEventsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
