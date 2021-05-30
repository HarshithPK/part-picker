import { Component, OnInit } from '@angular/core';

import { DataStorageService } from 'src/app/shared/data-storage.service';

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
        private dataStorageService: DataStorageService
    ) {}

    ngOnInit(): void {
        this.graphicsCards = this.graphicsCardService.getGraphicsCards();
    }

    storeGraphicsCards(): void {
        this.dataStorageService.storeGraphicsCards();
    }

    loadGraphicsCards(): void {
        this.dataStorageService.fetchGraphicsCards();
    }
}
