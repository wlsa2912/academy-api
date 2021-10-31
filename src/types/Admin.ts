export interface AddCreditsToStudent {
  uuid: string,
  method: string,
  credits: number,
  price: number,
}

export interface RefundCreditsBought {
  id: string,
  uuid: string
}

export interface GetAllTransactions {
  transactionsPerPage: number,
  page: number
}

export interface GetAllGroups {
  transactionsPerPage: number,
  page: number
}

export interface CreateAClass {
  uuid: string,
  title: string,
  modality: string,
  date: Date,
  price: number,
  status: string,
  vacancies: number,
  group?: string
}

export interface CreateAPlan {
  uuid: string,
  title: string,
  modality: string,
  date: Date,
  enddate: Date,
  price: number,
  status: string,
  vacancies: number,
}
