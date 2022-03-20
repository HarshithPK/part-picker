import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BuildSystemService } from 'src/app/build-system/build-system.service';

import { Storage } from '../storage.model';
import { StorageService } from '../storage.service';

@Component({
    selector: 'app-storage-detail',
    templateUrl: './storage-detail.component.html',
    styleUrls: ['./storage-detail.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class StorageDetailComponent implements OnInit {
    id!: number;
    storage!: Storage;

    constructor(
        private storageService: StorageService,
        private route: ActivatedRoute,
        private buildSystemService: BuildSystemService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.id = +params.id;
            this.storage = this.storageService.getStorage(this.id);
        });
    }

    addStorage(): void {
        this.buildSystemService.addStorage(this.storage);
        this.router.navigate(['/build-system']);
    }
}
