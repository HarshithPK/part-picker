import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { GraphicsCard } from './graphics-card.model';
import { GraphicsCardService } from './graphics-card.service';

@Injectable({ providedIn: 'root' })
export class GraphicsCardsResolverService implements Resolve<GraphicsCard[]> {
    constructor(
        private dataStorageService: DataStorageService,
        private graphicsCardService: GraphicsCardService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const graphicsCards = this.graphicsCardService.getGraphicsCards();

        if (graphicsCards.length === 0) {
            return this.dataStorageService.fetchGraphicsCards();
        } else {
            return graphicsCards;
        }
    }
}
