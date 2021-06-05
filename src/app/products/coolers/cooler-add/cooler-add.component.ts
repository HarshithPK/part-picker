import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataStorageService } from 'src/app/shared/data-storage.service';

import { Cooler } from '../cooler.model';
import { CoolerService } from '../cooler.service';

@Component({
    selector: 'app-cooler-add',
    templateUrl: './cooler-add.component.html',
    styleUrls: ['./cooler-add.component.scss'],
})
export class CoolerAddComponent implements OnInit {
    private coolers: Cooler[] = [];
    private cooler!: Cooler;

    constructor(
        private coolerService: CoolerService,
        private dataStorageService: DataStorageService
    ) {}

    ngOnInit(): void {
        this.coolers = this.coolerService.getCoolers();
    }

    onSubmit(form: NgForm) {
        const socketCompatability = form.value.socketCompatability.split(',');

        this.cooler = new Cooler(
            form.value.manufacturer,
            form.value.series,
            form.value.name,
            form.value.fanRPMRange,
            form.value.heightWithoutFan,
            form.value.heightWithFan,
            form.value.acousticalNoiseLevel,
            socketCompatability,
            form.value.color,
            form.value.waterCooled,
            form.value.fanless,
            form.value.imagePath,
            form.value.price
        );

        console.log(this.cooler);

        this.coolers.push(this.cooler);
        this.dataStorageService.storeCoolers(this.coolers);

        form.reset();
    }
}
