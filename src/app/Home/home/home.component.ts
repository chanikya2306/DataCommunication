import { Component, OnInit } from '@angular/core';
import { DatacommunicationService } from 'src/app/Services/datacommunication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sendmessage: any;
  display: any = true
  show_message: any
  constructor(private api: DatacommunicationService) { }

  ngOnInit(): void {

  }
  getUserData() {
    this.api.readData().subscribe((response: any) => {
      this.sendmessage = response.data
      console.log(this.sendmessage)
    })
  }
  reciveData(event: any) {
    this.show_message = event
    console.log(this.show_message)
  }
}
