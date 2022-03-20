import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { BuildSystemService } from 'src/app/build-system/build-system.service';
import { Processor } from '../processor.model';
import { ProcessorService } from '../processor.service';

@Component({
    selector: 'app-processor-detail',
    templateUrl: './processor-detail.component.html',
    styleUrls: ['./processor-detail.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ProcessorDetailComponent implements OnInit {
    id!: number;
    processor!: Processor;

    constructor(
        private processorService: ProcessorService,
        private route: ActivatedRoute,
        private buildSystemService: BuildSystemService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.id = +params.id;
            this.processor = this.processorService.getProcessor(this.id);
        });
    }

    addProcessor(): void {
        this.buildSystemService.addCPU(this.processor);
        this.router.navigate(['/build-system']);
    }
}
