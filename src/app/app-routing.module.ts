import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ContactComponent } from './components/contact/contact.component';
import { MenuComponent } from './components/menu/menu.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  { path:'', redirectTo:'accueil', pathMatch:'full' },
  { path:'accueil', component: AccueilComponent },
  { path:'contact', component: ContactComponent },
  { path:'menu', component: MenuComponent },
  { path:'404', component: Page404Component },
  { path:'**', redirectTo:'404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
