import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BuildSystemService } from 'src/app/build-system/build-system.service';

import { Motherboard } from '../motherboard.model';
import { MotherboardService } from '../motherboard.service';

@Component({
    selector: 'app-motherboard-detail',
    templateUrl: './motherboard-detail.component.html',
    styleUrls: ['./motherboard-detail.component.scss'],
})
export class MotherboardDetailComponent implements OnInit {
    id!: number;
    motherboard!: Motherboard;

    constructor(
        private motherboardService: MotherboardService,
        private route: ActivatedRoute,
        private buildSystemService: BuildSystemService,
        private router: Router
    ) {}

    ngOnInit(): void {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });

        this.route.params.subscribe((params: Params) => {
            this.id = +params.id;
            this.motherboard = this.motherboardService.getMotherboard(this.id);
        });
    }

    addMotherboard(): void {
        this.buildSystemService.addMotherboard(this.motherboard);
        this.router.navigate(['/build-system']);
    }
}
