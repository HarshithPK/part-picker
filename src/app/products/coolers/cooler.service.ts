import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Cooler } from './cooler.model';

@Injectable({ providedIn: 'root' })
export class CoolerService {
    coolersChanged = new Subject<Cooler[]>();
    activeCoolersChanged = new Subject<Cooler[]>();

    // coolers: Cooler[] = [
    //     new Cooler(
    //         'NOCTUA',
    //         'Noctua NH-D15',
    //         'Noctua NH-D15 Chromax.Black',
    //         '300 - 1500 RPM',
    //         160,
    //         165,
    //         '19.2 - 24.6 dB',
    //         [
    //             'AM2',
    //             'AM2+',
    //             'AM3',
    //             'AM3+',
    //             'AM4',
    //             'FM1',
    //             'FM2',
    //             'FM2+',
    //             'LGA1150',
    //             'LGA1151',
    //             'LGA1155',
    //             'LGA1156',
    //             'LGA1200',
    //             'LGA2011',
    //             'LGA2011-3',
    //             'LGA2066',
    //         ],
    //         'Black',
    //         'No',
    //         'No',
    //         'https://noctua.at/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/n/h/nh_d15_chromax_black_1_4.jpg',
    //         9549
    //     ),
    //     new Cooler(
    //         'be quiet!',
    //         'be quiet! Dark Rock',
    //         'be quiet! Dark Rock Pro 4',
    //         '1450 RPM',
    //         163,
    //         163,
    //         '12.8 - 24.3 dB',
    //         [
    //             'AM2',
    //             'AM2+',
    //             'AM3',
    //             'AM3+',
    //             'AM4',
    //             'FM1',
    //             'FM2',
    //             'FM2+',
    //             'LGA1150',
    //             'LGA1151',
    //             'LGA1155',
    //             'LGA1156',
    //             'LGA1200',
    //             'LGA1366',
    //             'LGA2011',
    //             'LGA2011-3',
    //             'LGA2066',
    //         ],
    //         'Black',
    //         'No',
    //         'No',
    //         'https://www.bequiet.com/admin/ImageServer.php?ID=bc4c7a15698@be-quiet.net&omitPreview=true&width=535',
    //         7659
    //     ),
    //     new Cooler(
    //         'COOLER MASTER',
    //         'Cooler Master MASTERAIR',
    //         'Cooler Master MASTERAIR MA620M',
    //         '650 - 2000 RPM',
    //         165,
    //         165,
    //         '8 - 30 dB',
    //         [
    //             'AM2',
    //             'AM2+',
    //             'AM3',
    //             'AM3+',
    //             'AM4',
    //             'FM1',
    //             'FM2',
    //             'FM2+',
    //             'LGA1150',
    //             'LGA1151',
    //             'LGA1155',
    //             'LGA1156',
    //             'LGA1200',
    //             'LGA2011',
    //             'LGA2011-3',
    //             'LGA2066',
    //         ],
    //         'Black',
    //         'No',
    //         'No',
    //         'https://cdn.coolermaster.com/media/assets/1034/ma620m-1-zoom.png',
    //         8000
    //     ),
    // ];

    private coolers: Cooler[] = [];
    private activeCoolers: Cooler[] = [];

    constructor() {}

    setCoolers(coolers: Cooler[]) {
        this.coolers = coolers;
        this.activeCoolers = coolers.sort((a, b) => a.price - b.price);

        this.coolersChanged.next(this.coolers.slice());
        this.activeCoolersChanged.next(this.activeCoolers.slice());
    }

    getCoolers(): Cooler[] {
        return this.coolers.slice();
    }

    getCooler(index: number): Cooler {
        return this.activeCoolers[index];
    }

    applyAllFilters(
        manufacturerCheckboxes: string[],
        socketCheckboxes: string[],
        priceMin: number,
        priceMax: number,
        coolerHeightWithoutFan: number,
        coolerHeightWithFan: number
    ): Cooler[] {
        this.activeCoolers = this.applyPriceFilter(priceMin, priceMax);

        this.activeCoolers = this.applyHeightWithoutFanFilter(
            coolerHeightWithoutFan
        );

        this.activeCoolers = this.applyHeightWithFanFilter(coolerHeightWithFan);

        this.activeCoolers = this.applyManufacturerFilter(
            manufacturerCheckboxes
        );

        this.activeCoolers = this.applySocketFilter(socketCheckboxes);

        return this.activeCoolers.slice();
    }

    applyPriceFilter(priceMin: number, priceMax: number): Cooler[] {
        let newCoolersArray: Cooler[] = [];

        this.coolers.forEach((cooler) => {
            if (cooler.price >= priceMin && cooler.price <= priceMax)
                newCoolersArray.push(cooler);
        });

        return newCoolersArray;
    }

    applyHeightWithoutFanFilter(coolerHeightWithoutFan: number): Cooler[] {
        let newCoolersArray: Cooler[] = [];

        this.activeCoolers.forEach((cooler) => {
            if (cooler.heightWithoutFan >= coolerHeightWithoutFan)
                newCoolersArray.push(cooler);
        });

        return newCoolersArray;
    }

    applyHeightWithFanFilter(coolerHeightWithFan: number): Cooler[] {
        let newCoolersArray: Cooler[] = [];

        this.activeCoolers.forEach((cooler) => {
            if (cooler.heightWithFan >= coolerHeightWithFan)
                newCoolersArray.push(cooler);
        });

        return newCoolersArray;
    }

    applyManufacturerFilter(manufacturerCheckboxes: string[]): Cooler[] {
        let newCoolersArray: Cooler[] = [];

        if (manufacturerCheckboxes.length === 0) {
            return this.activeCoolers;
        } else {
            this.activeCoolers.forEach((cooler) => {
                manufacturerCheckboxes.forEach((manufacturer) => {
                    if (cooler.manufacturer === manufacturer)
                        newCoolersArray.push(cooler);
                });
            });
            return newCoolersArray;
        }
    }

    applySocketFilter(socketCheckboxes: string[]): Cooler[] {
        let newCoolersArray: Cooler[] = [];

        if (socketCheckboxes.length === 0) {
            return this.activeCoolers;
        } else {
            this.activeCoolers.forEach((cooler) => {
                socketCheckboxes.forEach((socketSupport) => {
                    cooler.socketCompatability.forEach((socket) => {
                        if (socket === socketSupport)
                            newCoolersArray.push(cooler);
                    });
                });
            });
            console.log(newCoolersArray);
            return newCoolersArray;
        }
    }
}
