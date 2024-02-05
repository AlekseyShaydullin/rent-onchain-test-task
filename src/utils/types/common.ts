// Типизация роутов
export interface IRoutesUrl {
  readonly [name: string]: string;
}

// Типизация опций меню
export interface IOptions {
  label: string;
  value: string;
  icon?: string;
}

export interface IOptionsContacts {
  title: string;
  description: string;
}

export interface IOptionsNav {
  link: string;
  title: string;
}

export interface IOptionsReferrals {
  title: string;
  number: string;
}

export interface IOptionsResult {
  title: string;
  value: string;
  currency: string;
}

export interface IReferral {
  title: string;
  country: string;
  date: string;
  sum: string;
  bonus: string;
}

export interface IOptionsReports {
  title: string;
  country: string;
  date: string;
  sum: string;
  bonus: string;
  referral: Array<IReferral>;
}
