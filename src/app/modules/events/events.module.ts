import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventLayoutComponent } from './components/event-layout/event-layout.component';
import { EventDashboardComponent } from './components/event-dashboard/event-dashboard.component';


@NgModule({
  declarations: [
    EventLayoutComponent,
    EventDashboardComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
