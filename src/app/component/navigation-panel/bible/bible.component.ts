import { templateJitUrl } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bible',
  templateUrl: './bible.component.html',
  styleUrls: ['./bible.component.css']
})
export class BibleComponent implements OnInit {

  isbible = true;
  @Output() isbiblecom = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  togglecloseb() {
    //  this.isbible = !this.isbible;
    this.isbiblecom.emit(false);
  }
  public show: boolean = false;
  public buttonName: any = 'Show';
  isShowDiv = true;
  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }
  public show1: boolean = false;
  public buttonName1: any = 'Show';
  isShowDiv1 = true;
  toggleDisplayDiv1() {
    this.isShowDiv1 = !this.isShowDiv1;
  }
  public show2: boolean = false;
  public buttonName2: any = 'Show';
  isShowDiv2 = true;
  toggleDisplayDiv2() {
    this.isShowDiv2 = !this.isShowDiv2;
  }
  
}
