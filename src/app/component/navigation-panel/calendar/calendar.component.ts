import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  iscalender = true;
  @Output() thiscalandercom = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  public todayString = new Date();
  ScheeduleDate(e: any) {
    console.log(e)
    this.todayString = e.value
  }
  toggleclose() {
    this.thiscalandercom.emit(false);
  }

  public show: boolean = false;
  public buttonName: any = 'Show';
  isShowDiv = true;
  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }
}
