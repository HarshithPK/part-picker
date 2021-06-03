import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BuildSystemService } from 'src/app/build-system/build-system.service';

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
        private route: ActivatedRoute,
        private buildSystemService: BuildSystemService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.id = +params.id;
            this.memory = this.memoryService.getRAM(this.id);
        });
    }

    addRAM(): void {
        this.buildSystemService.addMemory(this.memory);
        this.router.navigate(['/build-system']);
    }
}
