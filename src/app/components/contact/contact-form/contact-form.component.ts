import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Message } from 'src/app/models/message.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  

  contactForm: FormGroup;
  lastFormValid: boolean = true;

  @Output('msg-sent')
  messageEmitter = new EventEmitter<Message>();

  constructor(builder: FormBuilder) {
    this.contactForm = builder.group({
      'pseudo': new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      'destinataire': new FormControl('-', [Validators.required, this.checkSelect] ),
      'message': new FormControl(null, [Validators.required, Validators.maxLength(200)])
    },{
      validators: this.globalCheck
    })
  }

  ngOnInit(): void {
  }

  checkSelect( control : AbstractControl ) : ValidationErrors {
    if( control.value === 'proprio' || control.value === 'cuistot' || control.value === 'serveur' )
      return null;

    return {
      'bad value': 'La valeur de cet input devrait être "proprio", "cuistot" ou "serveur" '
    }
  }

  globalCheck( control : FormGroup ) : ValidationErrors {
    if( !control.value.message || (control.value.message.length > 10 && control.value.destinataire === 'serveur') )
      return {
        'message to serveur too long':'pas plus de 10 caractères pour un message à un serveur'
      }

    return null;
  }

  onSend() {

    // if( this.pseudo && this.pseudo != '' && this.destinataire != '-' && this.message && this.message != '' ) {
    //   this.messageEmitter.emit( {
    //     pseudo: this.pseudo,
    //     destinataire: this.destinataire,
    //     message: this.message
    //   } );
    // }

    console.log(this.contactForm);
    this.lastFormValid = this.contactForm.valid;

    if( this.contactForm.valid ){

      this.messageEmitter.emit( {
        pseudo: this.contactForm.value.pseudo,
        destinataire: this.contactForm.value.destinataire,
        message: this.contactForm.value.message
      } );

      this.contactForm.reset();
    }
      

  }

}
