import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrl: './search-component.component.scss'
})
export class SearchComponent {

  @Output() OnUpdateSearch = new EventEmitter<string>();

  onSubmit(form: NgForm) {
     console.log(form); // récupération des données du formulaire
     console.log(form.valid); // Affiche true si le formulaire est valide
     console.log(form.invalid); // Affiche true si le formulaire est invalide
     console.log(form.value['key']); // Affiche un objet avec les valeurs du formulaire (nom des champs en clé)
     console.log(form.value.word); // Affiche le mot recherché
    this.OnUpdateSearch.emit(form.value.word);
  }
} 