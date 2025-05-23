import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const localStorageCharacters = (): Character[] => {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
}

@Injectable({providedIn: 'root'})
export class DragonballService {
  constructor() { }

  characters = signal<Character[]>(localStorageCharacters());

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  addCharacterArregloPadre(character: Character) {
    this.characters.update((current) => [...current, character]);
  }
}
