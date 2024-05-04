import { Component, Input, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

public constructor( private dbzService: DbzService) {}


get characters(): Character[] {
  return [...this.dbzService.characters];
}

onDeleteCharacter(id: string):void {
  this.dbzService.deleteCharacterById( id )
}

onNewCharacter(character: Character):void {
  this.dbzService.addCharacter(character);
}

}
