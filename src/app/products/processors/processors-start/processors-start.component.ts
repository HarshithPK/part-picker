import { Component, Input, OnInit } from '@angular/core';

import { Processor } from '../processor.model';
import { ProcessorService } from '../processor.service';

@Component({
    selector: 'app-processors-start',
    templateUrl: './processors-start.component.html',
    styleUrls: ['./processors-start.component.scss'],
})
export class ProcessorsStartComponent implements OnInit {
    processors!: Processor[];

    constructor(private processorService: ProcessorService) {}

    ngOnInit(): void {
        this.processors = this.processorService.getProcessors();
    }
}
