import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Cooler } from '../cooler.model';
import { CoolerService } from '../cooler.service';

@Component({
    selector: 'app-coolers-start',
    templateUrl: './coolers-start.component.html',
    styleUrls: ['./coolers-start.component.scss'],
})
export class CoolersStartComponent implements OnInit {
    coolers!: Cooler[];

    constructor(private coolerService: CoolerService, private http: HttpClient) {}

    ngOnInit(): void {
        const url = 'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/coolers.json';
        this.http.get<Cooler[]>(url).subscribe(coolers => {
            this.coolers = coolers;
        })
        // this.coolers = this.coolerService.getCoolers();
    }

    storeCoolers(): void {
        this.coolerService.storeCoolers();
    }

    loadCoolers(): void {}
}
