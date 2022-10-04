export interface ListCompanyData {
  company: ListCompanyInterface[];
  count: number;
}

export interface ListCompanyInterface {
  _id: string;
  title: string;
  INN: string[] | null;
  user: User;
  companyInfo: CompanyInfo;
  finance: Finance;
  logo: string;
}

export interface CompanyInfo {
  NGEE: string[];
  address: Address;
  OKVED: string;
  littleName?: string;
  fullName?: string;
  phones?: string;
  site?: string;
}

export interface Address {
  legalAddress?: string;
  actualAddress?: string;
  streetAddress?: string;
}

export interface Finance {
  income?: string;
  expense?: string;
}

export interface User {
  userName?: string;
  userProfession?: string;
  userAvatar: string;
}
