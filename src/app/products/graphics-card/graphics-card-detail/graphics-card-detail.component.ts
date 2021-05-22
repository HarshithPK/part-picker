import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { GraphicsCard } from '../graphics-card.model';
import { GraphicsCardService } from '../graphics-card.service';

@Component({
    selector: 'app-graphics-card-detail',
    templateUrl: './graphics-card-detail.component.html',
    styleUrls: ['./graphics-card-detail.component.scss'],
})
export class GraphicsCardDetailComponent implements OnInit {
    id!: number;
    graphicsCard!: GraphicsCard;

    constructor(
        private graphicsCardService: GraphicsCardService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.id = +params.id;
            this.graphicsCard = this.graphicsCardService.getGraphicsCard(
                this.id
            );
        });
    }
}
