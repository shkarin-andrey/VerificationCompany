export interface ListCompanyData {
  company: ListCompanyInterface[];
  count: number;
}

interface ListCompanyInterface {
  id: string;
  title: string;
  description: string;
  dateRedistr?: string;
  priceTop?: string;
  priceBottom?: string;
  action: string;
  user: {
    userName?: string;
    userProfession?: string;
  };
  people?: string;
  legalAction?: string[];
}
