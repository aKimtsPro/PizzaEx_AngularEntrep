import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Message } from 'src/app/models/message.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {


  pseudo: string;
  destinataire: string = '-';
  message: string;

  @Output('msg-sent')
  messageEmitter = new EventEmitter<Message>();

  constructor() { }

  ngOnInit(): void {
  }

  onSend() {

    if( this.pseudo && this.pseudo != '' && this.destinataire != '-' && this.message && this.message != '' ) {
      this.messageEmitter.emit( {
        pseudo: this.pseudo,
        destinataire: this.destinataire,
        message: this.message
      } );
    }

  }

}
