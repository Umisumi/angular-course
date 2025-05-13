import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'app-add-character',
  imports: [],
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {
  name = signal('');
  power = signal(0);

  newCharacter = output<Character>();

  addCharacter() {
    if (!this.name() || !this.power() || this.power() < 0) return;

    const newCharacter: Character = {
      id: window.crypto.randomUUID(),
      name: this.name(),
      power: this.power(),
    };

    this.newCharacter.emit(newCharacter);

    this.name.set('');
    this.power.set(0);
  }
}
