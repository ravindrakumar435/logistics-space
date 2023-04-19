import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import {  log } from 'console';


@Injectable({
  providedIn: 'root'
})
export class EventsHandlingService {

  constructor(private auth: Auth, private router: Router, private angularFireStore: AngularFirestore) { }

  ngOnInit() {
  }


  typeOfEventsList = [
    { eventName: 'TechThursday', idEvent: 'Techy1' },
    { eventName: 'logiCalFriday', idEvent: 'logic1' }
  ]

  typeEventId: string = 'Techy1';

  eventMedia = {
    images: '',
    audio: '',
    video: '',
  }


  customEventData = {
    eventId: '19042023Techy1',
    eventTitle: 'Introduction to angular',
    eventDate: '19-04-2023',
    eventDescription: 'explaining the angular all details from this presentation',
    userId: 'imag.im@innovation.com',
    statusOfEvent: 'pending',
    eventPPT: '',
    media: JSON.stringify(this.eventMedia)
  }




  uploadTheEvent(eventData: any) {

    let eventDetails = {
      typeOfEvent: JSON.stringify(this.typeOfEventsList.filter(event => event.idEvent === this.typeEventId)),
      eventId: this.customEventData.eventId,
      eventTitle: this.customEventData.eventTitle,
      eventDate: this.customEventData.eventDate,
      eventDescription: this.customEventData.eventDescription,
      userId: this.customEventData.userId,
      statusOfEvent: this.customEventData.statusOfEvent,
      eventPPT: this.customEventData.eventPPT,
      media: this.customEventData.media
    }
    log(eventDetails, "eventDetails")

    this.angularFireStore.collection('events').add(eventDetails)
      .then((res) => {
        log(res, "Response from api")
      }).catch((error) => {
        log(error.message)
      })






  }







}
