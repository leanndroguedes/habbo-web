export interface History {
  creationTime: string;
  transactionSystemName: string;
  credits: number;
  product?: Product;
  price: string;
}

export interface Product {
  description: string;
  name: string;
}
