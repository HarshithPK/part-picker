import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BuildSystemService } from 'src/app/build-system/build-system.service';
import { GraphicsCard } from '../graphics-card.model';
import { GraphicsCardService } from '../graphics-card.service';

@Component({
    selector: 'app-graphics-card-start',
    templateUrl: './graphics-cards-start.component.html',
    styleUrls: ['./graphics-cards-start.component.scss'],
})
export class GraphicsCardsStartComponent implements OnInit {
    graphicsCards: GraphicsCard[] = null!;

    priceMin: number | undefined;
    priceMax: number | undefined;

    memorySize: number = 1;

    coreClock: number = 150;
    boostClock: number = 700;
    length: number = 65;
    tdp: number = 15;
    dviPorts: number = 0;
    hdmiPorts: number = 0;
    miniHdmiPorts: number = 0;
    displayPortPorts: number = 0;
    miniDisplayPortPorts: number = 0;
    slotWidth: number = 1;

    manufacturerCheckboxes: string[] = [];
    chipsetCheckboxes: string[] = [];
    interfaceCheckboxes: string[] = [];
    frameSyncCheckboxes: string[] = [];
    externalPowerCheckboxes: string[] = [];

    constructor(
        private graphicsCardService: GraphicsCardService,
        private buildSystemService: BuildSystemService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.graphicsCards = this.graphicsCardService.getGraphicsCards();
    }

    addGraphicsCard(index: number): void {
        const graphicsCard = this.graphicsCardService.getGraphicsCard(index);
        this.buildSystemService.addGraphicsCard(graphicsCard);
        this.router.navigate(['/build-system']);
    }

    //Apply selected filters
    applyFilters() {
        let activePriceMin: number = 0;
        let activePriceMax: number = 1000000;

        if (this.priceMin) {
            activePriceMin = this.priceMin;
        }

        if (this.priceMax) {
            activePriceMax = this.priceMax;
        }

        this.graphicsCards = this.graphicsCardService.applyAllFilters(
            this.manufacturerCheckboxes,
            this.chipsetCheckboxes,
            this.interfaceCheckboxes,
            this.frameSyncCheckboxes,
            this.externalPowerCheckboxes,
            activePriceMin,
            activePriceMax,
            this.memorySize,
            this.coreClock,
            this.boostClock,
            this.length,
            this.tdp,
            this.dviPorts,
            this.hdmiPorts,
            this.miniHdmiPorts,
            this.displayPortPorts,
            this.miniDisplayPortPorts,
            this.slotWidth
        );

        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    // Compute checked filters
    checkboxClicked(event: any, name: string, type: string) {
        if (type === 'manufacturer') {
            if (event.target.checked) {
                this.manufacturerCheckboxes.push(name);
            } else {
                this.manufacturerCheckboxes.forEach((element, index) => {
                    if (element === name)
                        this.manufacturerCheckboxes.splice(index, 1);
                });
            }
        }

        if (type === 'chipset') {
            if (event.target.checked) {
                this.chipsetCheckboxes.push(name);
            } else {
                this.chipsetCheckboxes.forEach((element, index) => {
                    if (element === name)
                        this.chipsetCheckboxes.splice(index, 1);
                });
            }
        }

        if (type === 'interface') {
            if (event.target.checked) {
                this.interfaceCheckboxes.push(name);
            } else {
                this.interfaceCheckboxes.forEach((element, index) => {
                    if (element === name)
                        this.interfaceCheckboxes.splice(index, 1);
                });
            }
        }

        if (type === 'frameSync') {
            if (event.target.checked) {
                this.frameSyncCheckboxes.push(name);
            } else {
                this.frameSyncCheckboxes.forEach((element, index) => {
                    if (element === name)
                        this.frameSyncCheckboxes.splice(index, 1);
                });
            }
        }

        if (type === 'externalPower') {
            if (event.target.checked) {
                this.externalPowerCheckboxes.push(name);
            } else {
                this.externalPowerCheckboxes.forEach((element, index) => {
                    if (element === name)
                        this.externalPowerCheckboxes.splice(index, 1);
                });
            }
        }
    }

    //Clear all filters
    clearFilters() {
        let currentUrl = this.router.url;
        this.router
            .navigateByUrl('/', { skipLocationChange: true })
            .then(() => {
                this.router.navigate([currentUrl]);
            });
    }
}
