import { Base } from "../base.model";

export class FileAttachment extends Base {
    fileName: string;
    fileType: string;
    fileData: any;
}
