import { Component, OnInit } from '@angular/core';

import { Memory } from '../momery.model';
import { MemoryService } from '../memory.service';

@Component({
    selector: 'app-memory-start',
    templateUrl: './memory-start.component.html',
    styleUrls: ['./memory-start.component.scss'],
})
export class MemoryStartComponent implements OnInit {
    memory!: Memory[];

    constructor(private memorySeervice: MemoryService) {}

    ngOnInit(): void {
        this.memory = this.memorySeervice.getMemory();
    }
}
