export class Motherboard {
    public manufacturer!: string;
    public series!: string;
    public name!: string;
    public socket!: string;
    public chipset!: string;
    public formFactor!: string;
    public processorsSupported!: string;
    public maxMemorySupport!: number;
    public memoryType!: string;
    public memorySlots!: number;
    public supportedMemorySpeed!: string[];
    public dualGpuSupport!: string[];
    public pciex16Slots!: number;
    public pciex8Slots!: number;
    public pciex4Slots!: number;
    public pciex1Slots!: number;
    public pciSlots!: number;
    public m2Slots!: string[];
    public sata6Gbps!: number;
    public ethernetPorts!: string;
    public USB2Headers!: number;
    public USB3Gen1Headers!: number;
    public USB3Gen2Headers!: number;
    public USB3Gen2x2Headers!: number;
    public wirelessSupport!: string;
    public imagePath!: string;
    public price!: number;

    constructor(
        manufacturer: string,
        series: string,
        name: string,
        socket: string,
        chipset: string,
        formFactor: string,
        processorsSupported: string,
        maxMemorySupport: number,
        memoryType: string,
        memorySlots: number,
        supportedMemorySpeed: string[],
        dualGpuSupport: string[],
        pciex16Slots: number,
        pciex8Slots: number,
        pciex4Slots: number,
        pciex1Slots: number,
        pciSlots: number,
        m2Slots: string[],
        sata6Gbps: number,
        ethernetPorts: string,
        USB2Headers: number,
        USB3Gen1Headers: number,
        USB3Gen2Headers: number,
        USB3Gen2x2Headers: number,
        wirelessSupport: string,
        imagePath: string,
        price: number
    ) {
        this.manufacturer = manufacturer;
        this.series = series;
        this.name = name;
        this.socket = socket;
        this.chipset = chipset;
        this.formFactor = formFactor;
        this.processorsSupported = processorsSupported;
        this.maxMemorySupport = maxMemorySupport;
        this.memoryType = memoryType;
        this.memorySlots = memorySlots;
        this.supportedMemorySpeed = supportedMemorySpeed;
        this.dualGpuSupport = dualGpuSupport;
        this.pciex16Slots = pciex16Slots;
        this.pciex8Slots = pciex8Slots;
        this.pciex4Slots = pciex4Slots;
        this.pciex1Slots = pciex1Slots;
        this.pciSlots = pciSlots;
        this.m2Slots = m2Slots;
        this.sata6Gbps = sata6Gbps;
        this.ethernetPorts = ethernetPorts;
        this.USB2Headers = USB2Headers;
        this.USB3Gen1Headers = USB3Gen1Headers;
        this.USB3Gen2Headers = USB3Gen2Headers;
        this.USB3Gen2x2Headers = USB3Gen2x2Headers;
        this.wirelessSupport = wirelessSupport;
        this.imagePath = imagePath;
        this.price = price;
    }
}
