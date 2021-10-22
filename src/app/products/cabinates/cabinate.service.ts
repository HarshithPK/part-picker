import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Cabinate } from './cabinate.model';

@Injectable({ providedIn: 'root' })
export class CabinateService {
    cabinatesChanged = new Subject<Cabinate[]>();
    activeCabinatesChanged = new Subject<Cabinate[]>();

    // cabinates: Cabinate[] = [
    //     new Cabinate(
    //         'LIAN LI',
    //         'Lian Li Dynamic',
    //         'Lian Li PC-O11 Dynamic ATX Full Tower Case',
    //         'ATX Full Tower',
    //         'None',
    //         'Silver',
    //         '285mm x 471mm x 513 mm (W x D x H)',
    //         '4 X USB 3.0 (2 on the front, 2 at the front case feet), 1 X USB 3.1 TYPE-C, 1 X HD AUDIO',
    //         'E-ATX/ATX/M-ATX/ITX',
    //         'Tempered Glass',
    //         '1.0 mm ALUMINUM EXTERIOR, 4.0 mm TEMPERED GLASS LEFT SIDE AND FRONT PANELS, 1.0 mm SPCC INTERIOR',
    //         220,
    //         446,
    //         167,
    //         '3 X 120 mm (side) + 1 X 120 mm (rear) + 3 X 120 mm/2 x 140 mm (base) + 3 X 120 mm/2 x 140 mm (top) (Optional)',
    //         '1 X TOP, 1 X BOTTOM, 2 X SIDE',
    //         'https://lian-li.com/wp-content/uploads/2020/11/O11D-XL_Silver_side45.jpg',
    //         18300
    //     ),
    //     new Cabinate(
    //         'ASUS',
    //         'Asus ROG STRIX',
    //         'Asus ROG Strix Helios ATX Full Tower Case',
    //         'ATX Full Tower',
    //         'None',
    //         'Black',
    //         '250mm x 565mm x 591 mm (W x D x H)',
    //         '1 x USB 3.1 Gen 2 (Type-C), 4 x USB 3.1 Gen 1, 1 x Headphone, 1 x Microphone, LED & Fan Control Buttons',
    //         'ATX/micro ATX/Mini ITX/EATX',
    //         'Tempered Glass',
    //         'Alloy Steel',
    //         220,
    //         450,
    //         190,
    //         'Cooling Support: Front: 3 x 140mm/ 3 x 120mm (Radiator + Fan Thickness: Max. 90mm), Top: 2 x 140mm/ 3 x 120mm (Radiator + Fan Thickness: Max. 60mm), Rear: 1 x 140mm/120mm, Radiator Support: Front: 120, 140, 240, 280, 360, 420 mm,Top 120, 140, 240, 280, 360 mm, Rear: 120, 140mm',
    //         '1 x Front, 1 x Top, 1 x Bottom',
    //         'https://dlcdnwebimgs.asus.com/gain/24CDD4E4-1FC5-4034-A289-8212BE7F4573/w1000/h732',
    //         27620
    //     ),
    //     new Cabinate(
    //         'CORSAIR',
    //         'Corsair Obsidian Series',
    //         'Corsair Obsidian 1000D Super-Tower Case',
    //         'ATX Super Tower',
    //         'None',
    //         'Black',
    //         '307mm x 693mm x 697mm (W x D x H)',
    //         '2 x USB 3.1 Gen-2 Type-C ports, 4 x USB 3.0 ports, 1 x Microphone, 1 x Headphone',
    //         'ATX, EATX, Micro ATX, Mini ITX, SSI EEB',
    //         'Tempered Glass',
    //         'Steel, Aluminum, Tempered Glass',
    //         225,
    //         400,
    //         180,
    //         '13 x fan support, upto 4 x 480mm radiator',
    //         '1 x Front, 1 x Top, 1 x Bottom',
    //         'https://www.corsair.com/medias/sys_master/images/images/heb/h6a/9112465244190/-CC-9011148-WW-Gallery-1000D-01.png',
    //         47495
    //     ),
    // ];

    private cabinates: Cabinate[] = [];
    private activeCabinates: Cabinate[] = [];

    constructor() {}

    setCabinates(cabinates: Cabinate[]): void {
        this.cabinates = cabinates;
        this.activeCabinates = cabinates.sort((a, b) => a.price - b.price);

        this.cabinatesChanged.next(this.cabinates.slice());
        this.activeCabinatesChanged.next(this.activeCabinates.slice());
    }

    getCabinates(): Cabinate[] {
        return this.cabinates.slice();
    }

    getCabinate(index: number): Cabinate {
        return this.activeCabinates[index];
    }

    applyAllFilters(
        manufacturerCheckboxes: string[],
        typeCheckboxes: string[],
        sidePanelWindowCheckboxes: string[],
        priceMin: number,
        priceMax: number,
        PSULength: number,
        GPULength: number,
        CPUCoolerClearance: number
    ): Cabinate[] {
        this.activeCabinates = this.applyPriceFilter(priceMin, priceMax);

        this.activeCabinates = this.applyPSULengthFilter(PSULength);

        this.activeCabinates = this.applyGPULengthFilter(GPULength);

        this.activeCabinates =
            this.applyCPUCoolerClearanceFilter(CPUCoolerClearance);

        this.activeCabinates = this.applyManufacturerFilter(
            manufacturerCheckboxes
        );

        this.activeCabinates = this.applyTypeFilter(typeCheckboxes);

        this.activeCabinates = this.applySidePanelWindowFilter(
            sidePanelWindowCheckboxes
        );

        return this.activeCabinates.slice();
    }

    applyPriceFilter(priceMin: number, priceMax: number): Cabinate[] {
        let newCabinatesArray: Cabinate[] = [];

        this.cabinates.forEach((cabinate) => {
            if (cabinate.price >= priceMin && cabinate.price <= priceMax)
                newCabinatesArray.push(cabinate);
        });
        return newCabinatesArray;
    }

    applyPSULengthFilter(PSULength: number): Cabinate[] {
        let newCabinatesArray: Cabinate[] = [];

        this.activeCabinates.forEach((cabinate) => {
            if (cabinate.maxPSULength >= PSULength)
                newCabinatesArray.push(cabinate);
        });
        return newCabinatesArray;
    }

    applyGPULengthFilter(GPULength: number): Cabinate[] {
        let newCabinatesArray: Cabinate[] = [];

        this.activeCabinates.forEach((cabinate) => {
            if (cabinate.maxGPULength >= GPULength)
                newCabinatesArray.push(cabinate);
        });
        return newCabinatesArray;
    }

    applyCPUCoolerClearanceFilter(CPUCoolerClearance: number): Cabinate[] {
        let newCabinatesArray: Cabinate[] = [];

        this.activeCabinates.forEach((cabinate) => {
            if (cabinate.maxCPUClearance >= CPUCoolerClearance)
                newCabinatesArray.push(cabinate);
        });
        return newCabinatesArray;
    }

    applyManufacturerFilter(manufacturerCheckboxes: string[]): Cabinate[] {
        let newCabinatesArray: Cabinate[] = [];

        if (manufacturerCheckboxes.length === 0) {
            return this.activeCabinates;
        } else {
            this.activeCabinates.forEach((cabinate) => {
                manufacturerCheckboxes.forEach((manufacturer) => {
                    if (cabinate.manufacturer === manufacturer)
                        newCabinatesArray.push(cabinate);
                });
            });
            return newCabinatesArray;
        }
    }

    applyTypeFilter(typeCheckboxes: string[]): Cabinate[] {
        let newCabinatesArray: Cabinate[] = [];

        if (typeCheckboxes.length === 0) {
            return this.activeCabinates;
        } else {
            this.activeCabinates.forEach((cabinate) => {
                typeCheckboxes.forEach((type) => {
                    if (cabinate.type === type)
                        newCabinatesArray.push(cabinate);
                });
            });
            return newCabinatesArray;
        }
    }

    applySidePanelWindowFilter(
        sidePanelWindowCheckboxes: string[]
    ): Cabinate[] {
        let newCabinatesArray: Cabinate[] = [];

        if (sidePanelWindowCheckboxes.length === 0) {
            return this.activeCabinates;
        } else {
            this.activeCabinates.forEach((cabinate) => {
                sidePanelWindowCheckboxes.forEach((sidePanelWindow) => {
                    if (cabinate.sidePanel === sidePanelWindow)
                        newCabinatesArray.push(cabinate);
                });
            });
            return newCabinatesArray;
        }
    }
}
