import { HeroService } from './hero.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Hero } from 'app/hero';
import 'rxjs/add/operator/switchMap';
import { states, Address } from './address';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hero-detail',
  templateUrl: './hero-detail-component.html',
  styleUrls: ['./hero-detail-component.css']
})

export class HeroDetailComponent implements OnInit, OnChanges {
  @Input() hero: Hero;

  heroForm: FormGroup;
  states = states;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm(): void {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      secretLairs: this.fb.array([]),
      power: '',
      sidekick: ''
    });
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
    //     .subscribe(hero => {
    //       this.heroForm.patchValue({
    //         name: hero.name
    //       });
    //       console.log(this.heroForm);
    //     });
  }

  ngOnChanges(): void {
    this.heroForm.setValue({
      name: this.hero.name,
      address: this.hero.addresses[0] || new Address()
    });
  }

  setAddresses(addresses: Address[]) {
    const addressFGs = addresses.map(address => this.fb.group(address));
    const addressFormArray = this.fb.array(addressFGs);
    // Replacing control
    this.heroForm.setControl('secretLairs', addressFormArray);
  }

  get secretLairs(): FormArray {
    return this.heroForm.get('secretLairs') as FormArray;
  };

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }
}
