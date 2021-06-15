import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  pseudo: string;
  destinataire: string = '-';
  message: string;

  showHisto: boolean = true;

  historique: Message[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onSend() {

    if( this.pseudo && this.pseudo != '' && this.destinataire != '-' && this.message && this.message != '' ) {
      this.historique.push({
        pseudo: this.pseudo,
        destinataire: this.destinataire,
        message: this.message
      })
      console.log(this.historique);
    }

  }

}
