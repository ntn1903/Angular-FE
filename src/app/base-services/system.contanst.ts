export class SYSTEM_CONTAIN {
  public static readonly EmailSeparate: string = ";";
  public static readonly EmailSeparate2: string = " ";
  public static readonly EmailPattern: string = "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}";
  public static readonly EmailRegExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  public static readonly FORMAT_DATE = "YYYY-MM-DD";
  public static readonly FORMAT_DATETIME = "YYYY-MM-DD HH:mm:ss";
  public static readonly MY_FORMATS = {
    parse: { dateInput: SYSTEM_CONTAIN.FORMAT_DATE, },
    display: {
      dateInput: SYSTEM_CONTAIN.FORMAT_DATE,
      monthYearLabel: "MMM YYYY",
      dateA11yLabel: "LL",
      monthYearA11yLabel: "MMMM YYYY",
    },
  };
  public static readonly FORMAT_DATE_YEAR_MONTH = "YYYY-MM";
  public static readonly MY_FORMAT_YEAR_MONTH = {
    parse: { dateInput: SYSTEM_CONTAIN.FORMAT_DATE_YEAR_MONTH, },
    display: {
      dateInput: SYSTEM_CONTAIN.FORMAT_DATE_YEAR_MONTH,
      monthYearLabel: "MMM YYYY",
      dateA11yLabel: "LL",
      monthYearA11yLabel: "MMMM YYYY",
    },
  };
}
