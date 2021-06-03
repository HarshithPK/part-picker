import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BuildSystemService } from 'src/app/build-system/build-system.service';

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
        private route: ActivatedRoute,
        private buildSystemService: BuildSystemService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.id = +params.id;
            this.graphicsCard = this.graphicsCardService.getGraphicsCard(
                this.id
            );
        });
    }

    addGraphicsCard(): void {
        this.buildSystemService.addGraphicsCard(this.graphicsCard);
        this.router.navigate(['/build-system']);
    }
}
