import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventLayoutComponent } from './components/event-layout/event-layout.component';
import { EventDashboardComponent } from './components/event-dashboard/event-dashboard.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EventLayoutComponent,
    EventDashboardComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    SharedModule
  ]
})
export class EventsModule { }
