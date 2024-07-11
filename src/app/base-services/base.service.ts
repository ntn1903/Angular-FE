import { Injectable, Injector } from '@angular/core';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icMail from '@iconify/icons-ic/twotone-mail';
import icMap from '@iconify/icons-ic/twotone-map';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icFolder from '@iconify/icons-ic/twotone-folder';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  _SELECTED_ITEM: any;

  icPhone = icPhone;
  icMail = icMail;
  icMap = icMap;
  icEdit = icEdit;
  icSearch = icSearch;
  icDelete = icDelete;
  icAdd = icAdd;
  icFilterList = icFilterList;
  icMoreHoriz = icMoreHoriz;
  icFolder = icFolder;

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
