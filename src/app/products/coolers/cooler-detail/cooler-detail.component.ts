import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
3;

import { BuildSystemService } from 'src/app/build-system/build-system.service';
import { Cooler } from '../cooler.model';
import { CoolerService } from '../cooler.service';

@Component({
    selector: 'app-cooler-detail',
    templateUrl: './cooler-detail.component.html',
    styleUrls: ['./cooler-detail.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class CoolerDetailComponent implements OnInit {
    id!: number;
    cooler!: Cooler;

    constructor(
        private coolerService: CoolerService,
        private route: ActivatedRoute,
        private buildSystemService: BuildSystemService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.id = +params.id;
            this.cooler = this.coolerService.getCooler(this.id);
        });
    }

    addCooler(): void {
        this.buildSystemService.addCooler(this.cooler);
        this.router.navigate(['/build-system']);
    }
}
