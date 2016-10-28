import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
	moduleId: module.id,
	selector: 'my-dashboard',
	templateUrl: '/app/dashboard.component.html',
})

export class DashboardComponent implements OnInit {

	constructor(
		private router: Router,
		private heroService: HeroService) {
	}

	heroes: Hero[] = [];

	ngOnInit(): void {
		this.heroService.getHeroes()
			.then(heroes => this.heroes = heroes.slice(1, 5));
	}

	gotoDetail(hero: Hero): void {
		let link = ['/detail', hero.id];
		this.router.navigate(link);
	}
}
