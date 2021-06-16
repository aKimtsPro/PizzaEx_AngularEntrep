import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message.model';

@Component({
  selector: 'app-contact-histo',
  templateUrl: './contact-histo.component.html',
  styleUrls: ['./contact-histo.component.css']
})
export class ContactHistoComponent implements OnInit {

  @Input('histo')
  historique: Message[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  

}
