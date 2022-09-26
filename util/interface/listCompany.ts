export interface ListCompanyData {
  company: ListCompanyInterface[];
  count: number;
}

export interface ListCompanyInterface {
  id: string;
  title: string;
  INN: string[];
  user: {
    userName?: string;
    userProfession?: string;
  };
  companyInfo: {
    NGEE: string[];
    address: {
      legalAddress: string;
      actualAddress: string;
      streetAddress: string;
    };
    OKVED: string;
    littleName: string;
    fullName: string;
    phones?: string;
    site?: string;
  };
  finance: { income?: string; expense?: string };
}
