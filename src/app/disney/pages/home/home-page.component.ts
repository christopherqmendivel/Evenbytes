import { Component, OnInit } from '@angular/core';
import { DisneyService } from '../../../disney/services/disney.service';
import { Disney } from '../../interfaces/disney.interface';

@Component({
  selector: 'disney-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  
  constructor(private disneyService: DisneyService) {}

  ngOnInit(): void {
    this.disneyService.disneyCharacters(); // Carga los personajes de Disney
  }
  get disneyCharacters(): Disney[] {
    return this.disneyService.disneyList;
  }

}
