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
import icCheckCircle from '@iconify/icons-ic/twotone-check-circle';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icClose from '@iconify/icons-ic/twotone-close';
import icPrint from '@iconify/icons-ic/twotone-print';
import icDownload from '@iconify/icons-ic/twotone-cloud-download';
import icPerson from '@iconify/icons-ic/twotone-person';
import icMyLocation from '@iconify/icons-ic/twotone-my-location';
import icLocationCity from '@iconify/icons-ic/twotone-location-city';
import icEditLocation from '@iconify/icons-ic/twotone-edit-location';
import icPageView from '@iconify/icons-ic/pageview';
import icInfo from '@iconify/icons-ic/twotone-info';
import icStorage from '@iconify/icons-ic/storage';
import icBusiness from '@iconify/icons-ic/twotone-business';
import icChevronLeft from '@iconify/icons-ic/twotone-chevron-left';
import icChevronRight from '@iconify/icons-ic/twotone-chevron-right';
import { ResponseModel } from '../models/response-model.model';
import icHome from '@iconify/icons-ic/twotone-home';
@Injectable({
  providedIn: 'root'
})
export class BaseService {
  _SELECTED_ITEM: any;
  // _toastrService: ToastrService;

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
  icClose = icClose;
  icPrint = icPrint;
  icDownload = icDownload;
  icPerson = icPerson;
  icMyLocation = icMyLocation;
  icLocationCity = icLocationCity;
  icEditLocation = icEditLocation;
  icPageView = icPageView;
  icInfo = icInfo;
  icStorage = icStorage;
  icBusiness = icBusiness;
  icChevronLeft = icChevronLeft;
  icChevronRight = icChevronRight;
  icHome = icHome;

  constructor() { }

  isNullOrEmpty(input: string) {
    return input?.trim().length === 0 || input === null;
  }

  isUndefined(input: any) {
    return input == undefined || input === undefined || input == 'undefined' || input === 'undefined';
  }

  // showResponseMessage(res: ResponseModel) {
  //   if (res.isSuccess) {
  //     this._toastrService.success(res.message, 'Action successfully');
  //   } else {
  //     this._toastrService.error(res.message, 'Action failed');
  //   }
  // }

  // fileToPdf(file: AttachmentFileModel) {
  //   let byteCharacters = atob(file.attachment).split('').map(c => c.charCodeAt(0));
  //   const blob = new Blob([new Uint8Array(byteCharacters)], { type: 'application/pdf' });
  //   let $link = document.createElement('a');
  //   $link.href = window.URL.createObjectURL(blob);
  //   $link.setAttribute('download', (new Date().toISOString().slice(0, 10) + '_' + file.fileName));
  //   $link.click();
  // }

  toEnglish(str: string) {
    str = str.toLowerCase();
    str = str.replace(/A|Á|À|Ã|Ạ|Â|Ấ|Ầ|Ẫ|Ậ|Ă|Ắ|Ằ|Ẵ|Ặ/g, "A");
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/E|É|È|Ẽ|Ẹ|Ê|Ế|Ề|Ễ|Ệ/, "E");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/I|Í|Ì|Ĩ|Ị/g, "I");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/O|Ó|Ò|Õ|Ọ|Ô|Ố|Ồ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ỡ|Ợ/g, "O");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/U|Ú|Ù|Ũ|Ụ|Ư|Ứ|Ừ|Ữ|Ự/g, "U");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/Y|Ý|Ỳ|Ỹ|Ỵ/g, "Y");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/Đ/g, "D");
    str = str.replace(/đ/g, "d");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng 
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
    return str;
  }
}
