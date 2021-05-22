export class Storage {
    public manufacturer!: string;
    public series!: string;
    public name!: string;
    public capacity!: number;
    public type!: string;
    public cache!: number;
    public formFactor!: string;
    public storageInterface!: string;
    public NVME!: string;
    public imagePath!: string;
    public price!: number;

    constructor(
        manufacturer: string,
        series: string,
        name: string,
        capacity: number,
        type: string,
        cache: number,
        formFactor: string,
        storageInterface: string,
        NVME: string,
        imagePath: string,
        price: number
    ) {
        this.manufacturer = manufacturer;
        this.series = series;
        this.name = name;
        this.capacity = capacity;
        this.type = type;
        this.cache = cache;
        this.formFactor = formFactor;
        this.storageInterface = storageInterface;
        this.NVME = NVME;
        this.imagePath = imagePath;
        this.price = price;
    }
}
