import { Pipe, PipeTransform } from '@angular/core';
import { Plat } from '../models/plat.model';

@Pipe({
  name: 'plat'
})
export class PlatPipe implements PipeTransform {

  transform(value: Plat, showPrix?: boolean, monnaie?: string ): string {

    if(!monnaie)
      monnaie = 'euros'

    if( showPrix === false )
      return value.nom;
    else 
      return value.nom + ' - ' + value.prix + monnaie;
  }

}
