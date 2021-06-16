import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ContactComponent } from './components/contact/contact.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuPateComponent } from './components/menu/menu-pate/menu-pate.component';
import { MenuPizzaComponent } from './components/menu/menu-pizza/menu-pizza.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { Page404Component } from './components/page404/page404.component';
import { PlatPipe } from './pipes/plat.pipe';
import { ContactFormComponent } from './components/contact/contact-form/contact-form.component';
import { ContactHistoComponent } from './components/contact/contact-histo/contact-histo.component';
import { MessageCardComponent } from './components/contact/message-card/message-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    ContactComponent,
    MenuComponent,
    MenuPateComponent,
    MenuPizzaComponent,
    NavComponent,
    Page404Component,
    PlatPipe,
    ContactFormComponent,
    ContactHistoComponent,
    MessageCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
