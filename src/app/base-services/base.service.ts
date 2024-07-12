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
import icBookmarks from '@iconify/icons-ic/twotone-bookmarks';
import emojioneUS from '@iconify/icons-emojione/flag-for-flag-united-states';
import emojioneDE from '@iconify/icons-emojione/flag-for-flag-germany';
import emojioneVI from '@iconify/icons-emojione/flag-for-flag-vietnam';
import icMenu from '@iconify/icons-ic/twotone-menu';
import icPersonAdd from '@iconify/icons-ic/twotone-person-add';
import icAssignmentTurnedIn from '@iconify/icons-ic/twotone-assignment-turned-in';
import icBallot from '@iconify/icons-ic/twotone-ballot';
import icDescription from '@iconify/icons-ic/twotone-description';
import icAssignment from '@iconify/icons-ic/twotone-assignment';
import icReceipt from '@iconify/icons-ic/twotone-receipt';
import icDoneAll from '@iconify/icons-ic/twotone-done-all';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icCheckCircle from '@iconify/icons-ic/twotone-check-circle';

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
  icMoreVert = icMoreVert;
  icBookmarks = icBookmarks;
  emojioneUS = emojioneUS;
  emojioneDE = emojioneDE;
  emojioneVI = emojioneVI;
  icMenu = icMenu;
  icPersonAdd = icPersonAdd;
  icAssignmentTurnedIn = icAssignmentTurnedIn;
  icBallot = icBallot;
  icDescription = icDescription;
  icAssignment = icAssignment;
  icReceipt = icReceipt;
  icDoneAll = icDoneAll;
  icArrowDropDown = icArrowDropDown;
  icCheckCircle = icCheckCircle;

  currentUser: string = "";

  constructor() { this.currentUser = localStorage.getItem('currentUser'); }

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
