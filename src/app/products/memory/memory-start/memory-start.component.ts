import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Memory } from '../momery.model';
import { MemoryService } from '../memory.service';
import { BuildSystemService } from 'src/app/build-system/build-system.service';

@Component({
    selector: 'app-memory-start',
    templateUrl: './memory-start.component.html',
    styleUrls: ['./memory-start.component.scss'],
})
export class MemoryStartComponent implements OnInit {
    memory: Memory[] = null!;

    constructor(
        private memorySeervice: MemoryService,
        private buildSystemService: BuildSystemService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.memory = this.memorySeervice.getMemory();
    }

    addRAM(index: number): void {
        const ram = this.memorySeervice.getRAM(index);
        this.buildSystemService.addMemory(ram);
        this.router.navigate(['/build-system']);
    }
}
