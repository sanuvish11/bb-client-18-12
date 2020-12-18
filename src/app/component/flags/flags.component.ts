import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.css']
})
export class FlagsComponent implements OnInit {
  isflag = true;
  @Output() thisflag = new EventEmitter<boolean>();
 
  toggleclosebtn(){
    this.isflag = !this.isflag;
    this.thisflag.emit(this.isflag);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
