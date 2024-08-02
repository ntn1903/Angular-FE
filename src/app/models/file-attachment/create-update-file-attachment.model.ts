import { Base } from "../base.model";

export class CreateUpdateFileAttachment extends Base {
    fileName: string;
    fileType: string;
    fileData: any;
}
