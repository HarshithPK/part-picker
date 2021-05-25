import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(private http: HttpClient) {}

    storeProducts(product: any, productType: string): void {
        const url =
            'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/' +
            productType +
            '.json';

        this.http.put(url, product).subscribe((response) => {
            console.log(response);
        });
    }

    loadProducts(productType: string): any {
        let product;

        const url = 'https://part-picker-5a901-default-rtdb.asia-southeast1.firebasedatabase.app/' +      productType + '.json';

        this.http.get(url).subscribe(product => {
            console.log(product);
            product = product;
        });

        return product;
    }
}
