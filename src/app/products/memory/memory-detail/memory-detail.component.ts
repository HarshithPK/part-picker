import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { MemoryService } from '../memory.service';
import { Memory } from '../momery.model';

@Component({
    selector: 'app-memory-detail',
    templateUrl: './memory-detail.component.html',
    styleUrls: ['./memory-detail.component.scss'],
})
export class MemoryDetailComponent implements OnInit {
    id!: number;
    memory!: Memory;

    constructor(
        private memoryService: MemoryService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.id = +params.id;
            this.memory = this.memoryService.getRAM(this.id);
        });
    }
}
