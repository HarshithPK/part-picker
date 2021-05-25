import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Cabinate } from '../cabinate.model';
import { CabinateService } from '../cabinate.service';

@Component({
    selector: 'app-cabinates-start',
    templateUrl: './cabinates-start.component.html',
    styleUrls: ['./cabinates-start.component.scss'],
})
export class CabinatesStartComponent implements OnInit {
    cabinates!: Cabinate[];

    constructor(private cabinateService: CabinateService, private http: HttpClient) {}

    ngOnInit(): void {
        const url = 'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/cabinates.json';
        this.http.get<Cabinate[]>(url).subscribe(cabinates => {
            this.cabinates = cabinates;
        })
        // this.cabinates = this.cabinateService.getCabinates();
    }

    storeCabinates(): void {
        this.cabinateService.storeCabinates();
    }

    loadCabinates(): void {
        this.cabinateService.loadCabinates();
    }
}
