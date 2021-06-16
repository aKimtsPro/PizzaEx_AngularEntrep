import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  showHisto: boolean = true;

  historique: Message[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onMsgSent( msg: Message ) {
    this.historique.push(msg);
    console.log(this.historique);
  }

}
