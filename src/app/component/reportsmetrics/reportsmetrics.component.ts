import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reportsmetrics',
  templateUrl: './reportsmetrics.component.html',
  styleUrls: ['./reportsmetrics.component.css']
})
export class ReportsmetricsComponent implements OnInit {
  isreport = true;
  @Output() thisreport = new EventEmitter<boolean>();
 
  toggleclosebtn(){
    this.isreport = !this.isreport;
    this.thisreport.emit(this.isreport);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
