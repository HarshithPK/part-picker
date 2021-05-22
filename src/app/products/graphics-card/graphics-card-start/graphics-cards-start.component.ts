import { Component, OnInit } from '@angular/core';

import { GraphicsCard } from '../graphics-card.model';
import { GraphicsCardService } from '../graphics-card.service';

@Component({
    selector: 'app-graphics-card-start',
    templateUrl: './graphics-cards-start.component.html',
    styleUrls: ['./graphics-cards-start.component.scss'],
})
export class GraphicsCardsStartComponent implements OnInit {
    graphicsCards!: GraphicsCard[];

    constructor(private graphicsCardService: GraphicsCardService) {}

    ngOnInit(): void {
        this.graphicsCards = this.graphicsCardService.getGraphicsCards();
    }
}
