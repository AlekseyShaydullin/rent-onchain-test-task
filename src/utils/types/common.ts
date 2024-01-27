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