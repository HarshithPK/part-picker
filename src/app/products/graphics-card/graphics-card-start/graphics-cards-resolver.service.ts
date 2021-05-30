import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { GraphicsCard } from '../graphics-card.model';

@Injectable({ providedIn: 'root' })
export class GraphicsCardsResolverService implements Resolve<GraphicsCard[]> {
    constructor(private dataStorageService: DataStorageService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.dataStorageService.fetchGraphicsCards();
    }
}
