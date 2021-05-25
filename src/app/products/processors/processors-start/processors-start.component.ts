import { HttpClient } from '@angular/common/http';
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

    constructor(private processorService: ProcessorService, private http: HttpClient) {}

    ngOnInit(): void {
        const url = 'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/processors.json';
        this.http.get<Processor[]>(url).subscribe(processors => {
            this.processors = processors;
        })
    }

    storeProcessors(): void {
        this.processorService.storeProcessors();
    }

    loadProcessors(): void {
        // this.dataStoreService.loadProcessors();
    }
}
