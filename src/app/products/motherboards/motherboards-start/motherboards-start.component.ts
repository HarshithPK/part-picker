import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Motherboard } from '../motherboard.model';
import { MotherboardService } from '../motherboard.service';

@Component({
    selector: 'app-motherboards-start',
    templateUrl: './motherboards-start.component.html',
    styleUrls: ['./motherboards-start.component.scss'],
})
export class MotherboardsStartComponent implements OnInit {
    motherboards!: Motherboard[];

    constructor(private motherboardService: MotherboardService, private http:HttpClient) {}

    ngOnInit(): void {
        const url = 'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/motherboards.json';
        this.http.get<Motherboard[]>(url).subscribe(motherboards => {
            this.motherboards = motherboards;
        })
    }

    storeMotherboards(): void {
        this.motherboardService.storeMotherboards();
    }

    loadMotherboards(): void {
        // this.dataStoreService.loadProcessors();
    }
}
