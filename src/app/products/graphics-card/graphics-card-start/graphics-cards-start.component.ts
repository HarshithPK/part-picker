import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BuildSystemService } from 'src/app/build-system/build-system.service';
import { GraphicsCard } from '../graphics-card.model';
import { GraphicsCardService } from '../graphics-card.service';

@Component({
    selector: 'app-graphics-card-start',
    templateUrl: './graphics-cards-start.component.html',
    styleUrls: ['./graphics-cards-start.component.scss'],
})
export class GraphicsCardsStartComponent implements OnInit {
    graphicsCards: GraphicsCard[] = null!;

    constructor(
        private graphicsCardService: GraphicsCardService,
        private buildSystemService: BuildSystemService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.graphicsCards = this.graphicsCardService.getGraphicsCards();
    }

    addGraphicsCard(index: number): void {
        const graphicsCard = this.graphicsCardService.getGraphicsCard(index);
        this.buildSystemService.addGraphicsCard(graphicsCard);
        this.router.navigate(['/build-system']);
    }
}
