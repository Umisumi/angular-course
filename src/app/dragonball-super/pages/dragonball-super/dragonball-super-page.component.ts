import { Component, inject } from "@angular/core";
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { AddCharacterComponent } from "../../components/dragonball/add-character/add-character.component";
import { DragonballService } from "../../services/dragonball.service";

@Component({
  selector: 'app-dragonball-super-page',
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent, AddCharacterComponent],
})
export class DragonballSuperPageComponent {

  public dragonballService = inject(DragonballService); // Inyectando el servicio directamente en la propiedad

}
