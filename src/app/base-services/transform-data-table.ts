import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'transformDataTable' })
export class TransformDataTable implements PipeTransform {
    transform(value: any, strToReplace: string, replacementStr: string): any {
        if (!Number(value) && value) {
            return value.replaceAll(new RegExp(strToReplace, 'g'), replacementStr);
        }
        return value;
    }
}