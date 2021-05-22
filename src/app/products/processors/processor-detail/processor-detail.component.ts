import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Processor } from '../processor.model';
import { ProcessorService } from '../processor.service';

@Component({
    selector: 'app-processor-detail',
    templateUrl: './processor-detail.component.html',
    styleUrls: ['./processor-detail.component.scss'],
})
export class ProcessorDetailComponent implements OnInit {
    id!: number;
    processor!: Processor;

    constructor(
        private processorService: ProcessorService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.id = +params.id;
            this.processor = this.processorService.getProcessor(this.id);
        });
    }
}
