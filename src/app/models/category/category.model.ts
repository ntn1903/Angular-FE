import { Base } from "../base.model";

export class Category extends Base {
    name: string;
    description: string;
    
    constructor(cate) {
        super();
        this.id = cate.id;
        this.createdAt = cate.createdAt;
        this.creatorId = cate.creatorId;
        this.name = cate.name;
        this.description = cate.description;
    }
}
