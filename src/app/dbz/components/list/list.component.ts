import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    id: '1234',
    name: 'Trunk',
    power: 10
  }]


  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  deleteCharacterById(id?: string): void {
    //emitir el id del personaje

    if(!id) return;
    console.log(id);
    this.onDelete.emit(id);
  }


}
