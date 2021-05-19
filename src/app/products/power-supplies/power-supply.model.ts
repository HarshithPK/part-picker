export class PowerSupply {
    public manufacturer!: string;
    public series!: string;
    public name!: string;
    public formFactor!: string;
    public efficiencyRating!: string;
    public wattage!: number;
    public modular!: string;
    public length!: number;
    public color!: string;
    public fanless!: string;
    public EPSConnectors!: number;
    public PCIe62PinConnectors!: number;
    public SATAConnectors!: number;
    public Molex4PinConnectors!: number;
    public imagePath!: string;
    public price!: number;

    constructor(
        manufacturer: string,
        series: string,
        name: string,
        formFactor: string,
        efficiencyRating: string,
        wattage: number,
        modular: string,
        length: number,
        color: string,
        fanless: string,
        EPSConnectors: number,
        PCIe62PinConnectors: number,
        SATAConnectors: number,
        Molex4PinConnectors: number,
        imagePath: string,
        price: number
    ) {
        this.manufacturer = manufacturer;
        this.series = series;
        this.name = name;
        this.formFactor = formFactor;
        this.efficiencyRating = efficiencyRating;
        this.wattage = wattage;
        this.modular = modular;
        this.length = length;
        this.color = color;
        this.fanless = fanless;
        this.EPSConnectors = EPSConnectors;
        this.PCIe62PinConnectors = PCIe62PinConnectors;
        this.SATAConnectors = SATAConnectors;
        this.Molex4PinConnectors = Molex4PinConnectors;
        this.imagePath = imagePath;
        this.price = price;
    }
}
