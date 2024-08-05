import { Base } from "../base.model";

export class Supplier extends Base {
    name: string;
    phone: string;
    address: string;

    constructor(supplier: Supplier) {
        super();
        this.id = supplier.id;
        this.name = supplier.name;
        this.phone = supplier.phone;
        this.address = supplier.address;
        this.createdAt = supplier.createdAt;
        this, this.creatorId = supplier.creatorId;
        this.description = this.description;
    }
}
