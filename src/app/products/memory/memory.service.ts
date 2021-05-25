import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Memory } from './momery.model';

@Injectable({ providedIn: 'root' })
export class MemoryService {
    // memory: Memory[] = [
    //     new Memory(
    //         'CORSAIR',
    //         'Corsair Dominator Platinum RGB',
    //         'Corsair Dominator Platinum RGB 64 GB (4 x 16 GB)',
    //         'Black',
    //         64,
    //         'DDR4',
    //         3200,
    //         '288-pin DIMM',
    //         16,
    //         1.35,
    //         '16-18-18-36',
    //         '4 x 16GB',
    //         'Yes - Anodized Aluminum',
    //         'Non-ECC / Unbuffered',
    //         'https://www.corsair.com/ww/en/medias/sys_master/images/images/hf7/h3f/9732298047518/CMT64GX4M4E3200C16/Gallery/DOMINATOR_PLAT_RGB_03/-CMT64GX4M4E3200C16-Gallery-DOMINATOR-PLAT-RGB-03.png_1200Wx1200H',
    //         87085.39
    //     ),
    //     new Memory(
    //         'G.SKILL',
    //         'G.Skill Trident Z Neo',
    //         'G.Skill Trident Z Neo 64 GB (4 x 16 GB) RGB',
    //         'Black / Silver',
    //         64,
    //         'DDR4',
    //         3600,
    //         '288-pin DIMM',
    //         16,
    //         1.35,
    //         '16-19-19-39',
    //         '4 x 16GB',
    //         'Yes',
    //         'Non-ECC / Unbuffered',
    //         'https://www.gskill.com/_upload/images/156284028010.png',
    //         47028.9
    //     ),
    //     new Memory(
    //         'CORSAIR',
    //         'Corsair Vengeance RGB Pro',
    //         'Corsair Vengeance RGB Pro 64 GB (4 x 16 GB)',
    //         'Black',
    //         64,
    //         'DDR4',
    //         3466,
    //         '288-pin DIMM',
    //         16,
    //         1.35,
    //         '16-18-18-36',
    //         '4 x 16GB',
    //         'Anodized Aluminum',
    //         'Non-ECC / Unbuffered',
    //         'https://www.corsair.com/ww/en/medias/sys_master/images/images/h60/h3f/9793648328734/CMH64GX4M4D3600C18/Gallery/VENGEANCE_RGB_PRO_SL_BLACK_13/-CMH64GX4M4D3600C18-Gallery-VENGEANCE-RGB-PRO-SL-BLACK-13.png_1200Wx1200H',
    //         50775
    //     ),
    // ];

    memory!: Memory[];
    constructor(private dataStoreService: DataStorageService, private http: HttpClient) {}

    getMemory(): Memory[] {
        const url = 'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/memory.json';

        this.http.get<Memory[]>(url).subscribe(memorys => {
            this.memory = memorys;
        })
        return this.memory;
    }

    getRAM(index: number): Memory {
        return this.memory[index];
    }

    storeMemory(): void {
        this.dataStoreService.storeProducts(this.memory, 'memory');
    }
}
