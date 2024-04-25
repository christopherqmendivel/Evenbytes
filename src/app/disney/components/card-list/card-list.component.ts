import { Component, Input } from '@angular/core';
import { Disney } from '../../interfaces/disney.interface';

@Component({
  selector: 'disney-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],

})
export class CardListComponent { 

  @Input()
  public disney: Disney[] = [];

}
