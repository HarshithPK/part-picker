import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    logoImagePath = '../../../assets/Logo.PNG';
    cpuImagePath = '../../../assets/Cpu_Image.png';
    moboImagePath = '../../../assets/Mobo_Image.PNG';
    ramImagePath = '../../../assets/Ram_Image.png';
    graphicsCardImagePath = '../../../assets/Graphics_Card_Image.png';
    cpuCoolerImagePath = '../../../assets/Cpu_Cooler_Image.png';
    powerSupplyImagePath = '../../../assets/Power_Supply_Image.png';
    storageImagePath = '../../../assets/Storege_Image.png';
    cabinateImagePath = '../../../assets/Cabinate_Image.png';

    @Output() featureSelected = new EventEmitter<string>();

    constructor() {}

    ngOnInit(): void {}

    onSelect(feature: string): void {
        this.featureSelected.emit(feature);
    }
}
