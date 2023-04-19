import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { EventsHandlingService } from '../../eventServices/events-handling.service';

@Component({
  selector: 'app-event-dashboard',
  templateUrl: './event-dashboard.component.html',
  styleUrls: ['./event-dashboard.component.scss']
})
export class EventDashboardComponent implements OnInit {

  constructor(public authService: AuthService,private eventService:EventsHandlingService) { }

  ngOnInit(): void {
      this.eventService.uploadTheEvent('');
  }


 
}
