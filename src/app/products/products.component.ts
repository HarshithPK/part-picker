import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
    logoImagePath = '../../../assets/Logo.PNG';
    cpuImagePath = '../../../assets/Cpu_Image.png';
    moboImagePath = '../../../assets/Mobo_Image.PNG';
    ramImagePath = '../../../assets/Ram_Image.png';
    graphicsCardImagePath = '../../../assets/Graphics_Card_Image.png';
    cpuCoolerImagePath = '../../../assets/Cpu_Cooler_Image.png';
    powerSupplyImagePath = '../../../assets/Power_Supply_Image.png';
    storageImagePath = '../../../assets/Storege_Image.png';
    cabinateImagePath = '../../../assets/Cabinate_Image.png';

    constructor() {}

    ngOnInit(): void {}
}
