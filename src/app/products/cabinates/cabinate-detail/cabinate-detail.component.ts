import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { BuildSystemService } from 'src/app/build-system/build-system.service';
import { Cabinate } from '../cabinate.model';
import { CabinateService } from '../cabinate.service';

@Component({
    selector: 'app-cabinate-detail',
    templateUrl: './cabinate-detail.component.html',
    styleUrls: ['./cabinate-detail.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class CabinateDetailComponent implements OnInit {
    id!: number;
    cabinate!: Cabinate;

    constructor(
        private cabinateService: CabinateService,
        private route: ActivatedRoute,
        private buildSystemService: BuildSystemService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.id = +params.id;
            this.cabinate = this.cabinateService.getCabinate(this.id);
        });
    }

    addCabinate(): void {
        this.buildSystemService.addCabinate(this.cabinate);
        this.router.navigate(['/build-system']);
    }
}
