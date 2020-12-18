import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChatService } from '../service/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  ischatpanel = true;
  @Output() thischat = new EventEmitter();
 
  toggleclosebtn(){
    // this.ischatpanel = !this.ischatpanel;
    this.thischat.emit(false);
  }

 
  newMessage:string='';
  messageList:  string[] = [];
  load = true;
  name:string="";
  typingUser:any;
  typing = false;
  sentTime:string="";

  constructor(private chatService: ChatService) {
    this.initiate();
    this.getTyping();
    this.stopTyping();
  }
  public show: boolean = false;
  public buttonName: any = 'Show';
  isShowDiv = true;
  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }
  public todayString = new Date();
  ScheeduleDate(e: any) {
    console.log(e)
    this.todayString = e.value
  }
  initiate() {
   // this.name = localStorage.getItem("ravi");
    this.chatService.initiateChat(this.name);
    this.load = false;
  }

  sendMessage() {
    let date: Date = new Date();

    this.chatService.sendMessage({sender:this.name, msg: this.newMessage,time: date.toISOString() });
    this.newMessage = '';
  }
  
  update() {
    this.chatService.updateStatus(this.name);
  }

  
  stopTyping() {
    this.chatService.stopTyping(this.name).subscribe((name:any) => {
   
      if(this.name !== name.username){
   
       this.typingUser = name;
       this.typing = false;
      } else{
        this.typing = false;
      }
       }); 
     }
  
  getTyping() {
    this.chatService.getTypingStatus().subscribe((name:any) => {
   
   if(this.name !== name.username){

    this.typingUser = name;
    this.typing = true;
   }
    setTimeout(()=>{
      this.typing = false;
    },3000);

  });

  }
  
 
  ngOnInit() {
  
    this.chatService
      .getMessages()
      .subscribe((message: any) => {
        this.messageList.push(message);
      });
  }
 
 
}