import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent implements OnInit {
  isjourney = true;
  @Output() thisjourney = new EventEmitter();
 
  toggleclosebtn(){
    
    this.thisjourney.emit(false);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
