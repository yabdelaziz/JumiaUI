export interface Customer {
  id: number;

  name: string;

  phone: string;

  country: string;

  countryCode: string;
}

export enum Country{
  CAMEROON,
  ETHIOPIA,
  MOROCCO,
  MOZAMBIQUE,
  UGANDA,
  ALL
}
