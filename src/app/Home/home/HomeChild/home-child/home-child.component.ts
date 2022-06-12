import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.scss']
})
export class HomeChildComponent implements OnInit {

  @Input() message: any;

  @Output() mesaageEvent = new EventEmitter<any>();
  constructor() {

  }

  ngOnInit(): void {
    console.log(this.message)
  }
  sendMessage() {
    this.mesaageEvent.emit(this.message);
    
  }
}
