import { Component, OnInit, Input} from '@angular/core';
import { Hero } from 'app/hero';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hero-detail',
  templateUrl: './hero-detail-component.html',
  styleUrls: ['./hero-detail-component.css']
})

export class HeroDetailComponent{
  @Input() hero: Hero;
}
