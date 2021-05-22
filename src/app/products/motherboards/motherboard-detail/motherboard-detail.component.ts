import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

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
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.id = +params.id;
            this.motherboard = this.motherboardService.getMotherbboard(this.id);
        });
    }
}
