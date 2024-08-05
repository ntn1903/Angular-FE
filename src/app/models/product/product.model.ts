import { Base } from "../base.model";

export class Product extends Base {
    categoryId: number;
    supplierId: number;
    name: string;
    quantity: number;
    price: number;

    constructor(p: Product) {
        super();
        this.id = p.id;
        this.categoryId = p.categoryId;
        this.supplierId = p.supplierId;
        this.name = p.name;
        this.quantity = p.quantity;
        this.price = p.price;
        this.createdAt = p.createdAt;
        this.creatorId = p.creatorId;
        this.description = p.description;
    }
}
