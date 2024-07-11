import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  _SELECTED_ITEM: any;
  constructor() { }

  isNullOrEmpty(input: string | null) {
    return input?.trim().length === 0 || input === null;
  }

  // fileToPdf(file: AttachmentFileModel) {
  //   let byteCharacters = atob(file.attachment).split('').map(c => c.charCodeAt(0));
  //   const blob = new Blob([new Uint8Array(byteCharacters)], { type: 'application/pdf' });
  //   let $link = document.createElement('a');
  //   $link.href = window.URL.createObjectURL(blob);
  //   $link.setAttribute('download', (new Date().toISOString().slice(0, 10) + '_' + file.fileName));
  //   $link.click();
  // }
}
