import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Motherboard } from './motherboard.model';

@Injectable({ providedIn: 'root' })
export class MotherboardService {
    motherboardsChanged = new Subject<Motherboard[]>();

    // motherboards: Motherboard[] = [
    //     new Motherboard(
    //         'ASUS',
    //         'Asus Rog Crosshair',
    //         'Asus ROG Crosshair VIII Dark Hero',
    //         'AM 4',
    //         'AMD X570',
    //         'ATX',
    //         'AMD Ryzen 5000 Series, AMD Ryzen 4000 G Series, AMD Ryzen 3000 Series, AMD Ryzen 3000 G Series, AMD Ryzen 2000 Series, AMD Ryzen 2000 G Series',
    //         128,
    //         'DDR4',
    //         4,
    //         [
    //             'DDR4-2133',
    //             'DDR4-2400',
    //             'DDR4-2666',
    //             'DDR4-2800',
    //             'DDR4-2933',
    //             'DDR4-3000',
    //             'DDR4-3200',
    //             'DDR4-3400',
    //             'DDR4-3466',
    //             'DDR4-3600',
    //             'DDR4-3733',
    //             'DDR4-3866',
    //             'DDR4-4000',
    //             'DDR4-4133',
    //             'DDR4-4266',
    //             'DDR4-4400',
    //             'DDR4-4600',
    //             'DDR4-4666',
    //             'DDR4-4800',
    //             'DDR4-4866',
    //         ],
    //         ['CrossFire: Capable', 'Nvidia 2-Way SLI: Capable'],
    //         3,
    //         0,
    //         0,
    //         1,
    //         0,
    //         ['2242/2260/2280 M-key', '2242/2260/2280/22110 M-key'],
    //         8,
    //         '1 x 1 Gbit/s, 1 x 2.5 Gbit/s',
    //         2,
    //         1,
    //         1,
    //         0,
    //         'Wi-Fi 6',
    //         'https://dlcdnwebimgs.asus.com/gain/5D031BFD-26B9-4953-9038-F608F1F00865/w717/h525',
    //         41500
    //     ),
    //     new Motherboard(
    //         'ASUS',
    //         'Asus ROG Maximus',
    //         'Asus ROG MAXIMUS XIII HERO',
    //         'LGA 1200',
    //         'Intel Z590',
    //         'ATX',
    //         'Intel Socket LGA 1200 for 11th Gen Intel Core Processors & 10th Gen Intel Core, Pentium Gold and Celeron Processors',
    //         128,
    //         'DDR4',
    //         4,
    //         [
    //             'DDR4-2133',
    //             'DDR4-2400',
    //             'DDR4-2666',
    //             'DDR4-2800',
    //             'DDR4-2933',
    //             'DDR4-3000',
    //             'DDR4-3200',
    //             'DDR4-3333',
    //             'DDR4-3400',
    //             'DDR4-3466',
    //             'DDR4-3600',
    //             'DDR4-3733',
    //             'DDR4-3866',
    //             'DDR4-4000',
    //             'DDR4-4133',
    //             'DDR4-4266',
    //             'DDR4-4400',
    //             'DDR4-4500',
    //             'DDR4-4600',
    //             'DDR4-4700',
    //             'DDR4-4800',
    //             'DDR4-5000',
    //         ],
    //         ['CrossFire: Not Available, Nvidia 2-Way SLI: Capable'],
    //         3,
    //         0,
    //         0,
    //         1,
    //         0,
    //         [
    //             '2242/2260/2280/22110 M-key (Intel Rocket Lake-based CPUs only)',
    //             '2242/2260/2280 M-key',
    //             '2242/2260/2280 M-key',
    //             '2242/2260/2280/22110 M-key',
    //         ],
    //         6,
    //         '0 x 1Gbit/s, 2 x 2.5 Gbit/s',
    //         2,
    //         2,
    //         0,
    //         1,
    //         'Wi-Fi 6',
    //         'https://dlcdnwebimgs.asus.com/gain/4F977803-AF2F-4BF4-9CE5-936C682BA03B/w1000/h732',
    //         42550
    //     ),
    //     new Motherboard(
    //         'GIGABYTE',
    //         'Gigabyte AORUS',
    //         'Gigabyte X570 AORUS MASTER',
    //         'AM 4',
    //         'AMD X570',
    //         'ATX',
    //         'AMD Ryzen 5000 Series, AMD Ryzen 4000 G Series, AMD Ryzen 3000 Series, AMD Ryzen 3000 G Series, AMD Ryzen 2000 Series, AMD Ryzen 2000 G Series',
    //         128,
    //         'DDR4',
    //         4,
    //         [
    //             'DDR4-2133',
    //             'DDR4-2400',
    //             'DDR4-2666',
    //             'DDR4-2933',
    //             'DDR4-3200',
    //             'DDR4-3300',
    //             'DDR4-3333',
    //             'DDR4-3400',
    //             'DDR4-3466',
    //             'DDR4-3600',
    //             'DDR4-3733',
    //             'DDR4-3800',
    //             'DDR4-3866',
    //             'DDR4-4000',
    //             'DDR4-4133',
    //             'DDR4-4266',
    //             'DDR4-4300',
    //             'DDR4-4400',
    //         ],
    //         ['CrossFire: Capable', 'Nvidia 2-Way SLI: Capable'],
    //         3,
    //         0,
    //         0,
    //         1,
    //         0,
    //         [
    //             '2242/2260/2280/22110 M-key',
    //             '2242/2260/2280/22110 M-key',
    //             '2242/2260/2280 M-key',
    //         ],
    //         6,
    //         '1 x 1 Gbit/s, 1 x 2.5 Gbit/s',
    //         2,
    //         2,
    //         1,
    //         0,
    //         'Wi-Fi 6',
    //         'https://static.gigabyte.com/StaticFile/Image/Global/a48dd846c736af824dc8fa2695f25859/Product/22022/png/1000',
    //         59999
    //     ),
    // ];

    private motherboards: Motherboard[] = [];

    constructor() {}

    setMotherboards(motherboards: Motherboard[]) {
        this.motherboards = motherboards;
        this.motherboardsChanged.next(this.motherboards.slice());
    }

    getMotherboards(): Motherboard[] {
        return this.motherboards.slice();
    }

    getMotherbboard(index: number): Motherboard {
        return this.motherboards[index];
    }
}
